import express, { json } from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from "bcrypt";
const saltRounds = 10;
var username="";
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen("3002", () => {
    console.log("Server started on port 3002");
})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "strongpassword",
    database: "nightout"
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL connected!");
})

app.post("/signUp", (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    
    const username = req.body.username;
    const dateOfBirth = req.body.dateOfBirth;
    const email = req.body.email;
    const password = req.body.password;
    const phoneNumber = req.body.phoneNumber;
    const country = req.body.country;
    const city = req.body.city;
    const street = req.body.street;
    var signUpDate;
    signUpDate = new Date();

    signUpDate = signUpDate.getUTCFullYear() + '-' +
        ('00' + (signUpDate.getUTCMonth()+1)).slice(-2) + '-' +
        ('00' + signUpDate.getUTCDate()).slice(-2);

    db.query("INSERT INTO CUSTOMER(firstName, lastName, dateOfBirth, phoneNumber, country, city, street, username) VALUES (?, ?, ?, ?, ?, ? ,?, ?)", [firstName, lastName, dateOfBirth, phoneNumber, country, city, street, username], (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log("Sign Up Customer Successful");
            
        }
    })
    bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query("INSERT INTO ACCOUNT(username, email, password, signUpDate, accountType) VALUES (?, ?, ?, ?, 'Customer')", [username, email, hash,signUpDate], (err, result) => {
            if (err) {
                console.log(err);
            }
            if (result) {
                console.log("Sign Up Account Successful");
                console.log(signUpDate);
            }
        })
    })

})

app.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT password FROM account WHERE username = ?", [username], (err, result) => {
        bcrypt.compare(password, result[0].password, (err2, result2) => {
            if (result2) {
                console.log("Sign In Successful!");
                res.send("Sign In Successful!");
            }
            if (err2) {
                console.log(err2);
            }
        })
    })
})



app.post("/vSignUp", (req, res) => {
    const venueName = req.body.venueName;
   
    const username = req.body.venueUsername;
    // const dateOfBirth = req.body.dateOfBirth;
    const email = req.body.venueEmail;
    const password = req.body.vpassword;
    const venuePhoneNumber = req.body.venuePhoneNumber;
    const venueCountry = req.body.venueCountry;
    const venueCity = req.body.venueCity;
    const venueAddress = req.body.venueAddress;
    const caza=req.body.caza;
    var signUpDate;
    signUpDate = new Date();

    signUpDate = signUpDate.getUTCFullYear() + '-' +
        ('00' + (signUpDate.getUTCMonth()+1)).slice(-2) + '-' +
        ('00' + signUpDate.getUTCDate()).slice(-2);


    db.query("INSERT INTO VENUE(name, phoneNumber, country,caza, city, street, username) VALUES (?, ?, ?, ?, ? ,?, ?)", [venueName,  venuePhoneNumber, venueCountry,caza, venueCity, venueAddress, username], (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log("Sign Up Venue Successful")
        }
    })
    bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query("INSERT INTO ACCOUNT(username, email, password, signUpDate, accountType) VALUES (?, ?, ?,?, 'Venue')", [username, email, hash,signUpDate], (err, result) => {
            if (err) {
                console.log(err);
            }
            if (result) {
                console.log("Sign Up Account Successful")
            }
        })
    })

})

app.post("/eventSignup", (req, res) => {
    const eventRequestName = req.body.eventRequestName;
    const eventRequestType = req.body.eventRequestType; 
    const ageRestrictionRequest = req.body.ageRestrictionRequest;
    const dressCodeRequest = req.body.dressCodeRequest;
    const ticketRequestCount = req.body.ticketRequestCount;
    const ticketPrice = req.body.ticketPrice;
    const descriptionRequest = req.body.descriptionRequest;
    const statusRequest = false;
    const dateRequest = req.body.dateRequest;
    const timeRequest = req.body.timeRequest;
    const venueUsername = req.body.username;
 const performer=req.body.performer;
   

    db.query("INSERT INTO EVENT_REQUEST(eventRequestName, eventRequestType, ageRestrictionRequest, dressCodeRequest, ticketRequestCount, descriptionRequest, statusRequest, dateRequest, timeRequest,performer,ticketPrice,venueUsername) VALUES (?,?,?,?,?,?,?,?, ?, ?, ?,?)", [eventRequestName, eventRequestType, ageRestrictionRequest, dressCodeRequest, ticketRequestCount, descriptionRequest, statusRequest, dateRequest, timeRequest,performer,ticketPrice,venueUsername], (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log("Event Request Sent!")
        }
    })
    

})

app.get("/admin", (req, res) => {
    

   

    db.query("SELECT * FROM EVENT_REQUEST WHERE statusRequest=0", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.json(JSON.parse(JSON.stringify(result)));
            console.log(JSON.parse(JSON.stringify(result)) );
            console.log("BACKEND");
           res=JSON.parse(JSON.stringify(result));
        
        }
    })
    

})
app.get("/admin2", (req, res) => {
    

   

    db.query("SELECT * FROM EVENT_REQUEST WHERE statusRequest=1", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.json(JSON.parse(JSON.stringify(result)));
            console.log(JSON.parse(JSON.stringify(result)) );
            console.log("BACKEND");
           res=JSON.parse(JSON.stringify(result));
        
        }
    })
    

})

app.get("/admin3", (req, res) => {
    

   

    db.query("SELECT * FROM EVENT_REQUEST WHERE statusRequest=2", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.json(JSON.parse(JSON.stringify(result)));
            console.log(JSON.parse(JSON.stringify(result)) );
            console.log("BACKEND");
           res=JSON.parse(JSON.stringify(result));
        
        }
    })
    

})


app.post("/admin4", (req, res) => {
   const selectedRows=req.body.selectedRows;

   
    db.query("UPDATE EVENT_REQUEST SET statusRequest=1 WHERE requestID IN ("+selectedRows.toString()+")", [selectedRows], (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log("Events Approved");
            
        }
    })

})


app.post("/admin5", (req, res) => {
    const selectedRows=req.body.selectedRows;
 
    
     db.query("UPDATE EVENT_REQUEST SET statusRequest=2 WHERE requestID IN ("+selectedRows.toString()+")", [selectedRows], (err, result) => {
         if (err) {
             console.log(err);
         }
         if (result) {
             console.log("Events Archived");
             
         }
     })
     
 
 })

 app.post("/admin6", (req, res) => {
    const selectedRows=req.body.selectedRows;
 
    
     db.query("DELETE FROM EVENT_REQUEST WHERE requestID IN ("+selectedRows.toString()+")", [selectedRows], (err, result) => {
         if (err) {
             console.log(err);
         }
         if (result) {
             console.log("Events Rejected");
             
         }
     })
     
 
 })



 app.post("/venue1", (req, res) => {
    username=req.body.username;

})





 app.post("/venue2", (req, res) => {
    

   

    db.query ("SELECT * FROM EVENT_REQUEST WHERE statusRequest=1 AND venueUsername=\""+username+"\";", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.json(JSON.parse(JSON.stringify(result)));
            console.log(JSON.parse(JSON.stringify(result)) );
            
           res=JSON.parse(JSON.stringify(result));
        
        }
    })
    

})

app.post("/venue3", (req, res) => {
    

   

    db.query ("SELECT * FROM EVENT_REQUEST WHERE statusRequest=0 AND venueUsername=\""+username+"\";", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.json(JSON.parse(JSON.stringify(result)));
            console.log(JSON.parse(JSON.stringify(result)) );
            
           res=JSON.parse(JSON.stringify(result));
        
        }
    })
    

})



// filter

app.post('/cards', (req, res) => {

    const filterResult = req.body.filterResult;

    db.query(filterResult, (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {

            // console.log(JSON.parse(JSON.stringify(result)));
            res.send(JSON.parse(JSON.stringify(result)));
        }

    })

})

app.get('/cardsAll', (req, res) => {

    db.query("SELECT timeRequest, dateRequest, ticketRequestCount,requestID ,name, eventRequestName, descriptionRequest, ageRestrictionRequest, ticketPrice, city,venueUsername FROM venue V, event_request E WHERE V.username=E.venueUsername AND statusRequest = 1;", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.send(result);
            // console.log(result);
        }

    })

})

app.get('/city', (req, res) => {

    db.query("SELECT DISTINCT city FROM venue", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.send(result);
        }

    })

})

app.get('/venue', (req, res) => {

    db.query("SELECT name FROM venue", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.send(result);
        }

    })

})

app.get('/country', (req, res) => {

    db.query("SELECT DISTINCT country FROM venue", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.send(result);
        }

    })

})

app.get('/genre', (req, res) => {

    db.query("SELECT DISTINCT eventRequestType from event_request;", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.send(result);
        }

    })

})

app.get('/genreSignUp', (req, res) => {

    db.query("SELECT genreType from music_genre;", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.send(result);
        }

    })

})

app.get('/performer', (req, res) => {

    db.query("SELECT DISTINCT performer from event_request;", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.send(result);
        }

    })

})








app.post("/signIn", (req, res) => {
    
    
    const username = req.body.username;
    const password = req.body.password;
    var accountType;

   
        db.query("SELECT password,accountType FROM account WHERE username=?", [username], (err, result) => {
            accountType=result[0].accountType;
            bcrypt.compare(password,result[0].password,(err2,result2)=>{
if (result2){
    console.log("SIGN IN SUCCESS")
    res.send(accountType);
}
if(err2){
    console.log(err2)
}
            })

        })
    

})




app.post('/ticket', (req, res) => {

    const username = req.body.username;
const ticketPrice=req.body.ticketPrice;
const dateRequest=req.body.dateRequest;
const timeRequest=req.body.timeRequest;
const eventRequestName=req.body.eventRequestName;
const requestID=req.body.requestID;
const venueUsername=req.body.venueUsername;

    db.query("INSERT INTO TICKET(ticketPrice,dateRequest,timeRequest,requestID,eventRequestName,username,venueUsername) VALUES(?,?,?,?,?,?,?)", [ticketPrice,dateRequest,timeRequest,requestID,eventRequestName,username,venueUsername], (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
       console.log("TICKET ADDED");
            
        }
    })

})


app.post("/ticket3", (req, res) => {
    

   

    db.query ("SELECT * FROM TICKET T, EVENT_REQUEST E WHERE E.requestID=T.requestID AND E.statusRequest=1 AND   T.venueUsername=\""+username+"\";", (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            res.json(JSON.parse(JSON.stringify(result)));
            console.log(JSON.parse(JSON.stringify(result)) );
            
           res=JSON.parse(JSON.stringify(result));
        
        }
    })
})

app.post("/ticket4", (req, res) => {
    const selectedRows=req.body.selectedRows;
 
    
     db.query("DELETE FROM TICKET WHERE ticketID IN ("+selectedRows.toString()+")", [selectedRows], (err, result) => {
         if (err) {
             console.log(err);
         }
         if (result) {
             console.log("Tickets Rejected");
             
         }
     })
     
 
 })

 app.post("/ticket1", (req, res) => {

    const ticketRequestCount = req.body.ticketRequestCount;
    const requestID = req.body.requestID;

    db.query("UPDATE event_request SET ticketRequestCount = ? WHERE requestID = ?", [ticketRequestCount, requestID], (err, result) => {
        if (err) {
            console.log(err);
        }
        if (result) {
            console.log("Ticket Count Updated")
        }
    })

})


app.post("/venue5", (req, res) => {
    const selectedRows=req.body.selectedRows;
 
    
     db.query("UPDATE EVENT_REQUEST SET statusRequest=2 WHERE requestID IN ("+selectedRows.toString()+")", [selectedRows], (err, result) => {
         if (err) {
             console.log(err);
         }
         if (result) {
             console.log("Events Archived");
             
         }
     })
     
 
 })