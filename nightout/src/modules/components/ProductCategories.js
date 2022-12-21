import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://d2doisxcuz2yo7.cloudfront.net/eyJidWNrZXQiOiJiYW1sZWIiLCJrZXkiOiIxZjdiZTc5ZTYyZDE5NWU1LTc1MzQ5MDI2XzQ1MzcwMDI0MTgxNDQ5MF83OTEzNDg2MzQ4MjEwNjY3NTJfbi5qcGciLCJlZGl0cyI6eyJ3ZWJwIjp0cnVlLCJqcGVnIjp0cnVlLCJzaGFycGVuIjp0cnVlLCJyZXNpemUiOnsid2lkdGgiOjUwMCwiaGVpZ2h0Ijo1MDB9fX0=',
    title: 'ARCH',
    width: '40%',
  },
  {
    url: 'https://freight.cargo.site/t/original/i/4523d655afb276eb5a0eb4c9f8b494ebf41455c42aaec7cde6d425fee9d0896a/KFS_2732.jpg',
    title: 'Soul Kitchen',
    width: '20%',
  },
  {
    url: 'https://cairoscene.com/Content/Admin/Uploads/Articles/ArticlesMainPhoto/1153872/12c73530-6bee-4f58-925d-302f49cffa5a.jpg',
    title: 'AHM',
    width: '40%',
  },
  {
    url: 'https://static.martin-audio.com/pressrelease/medium/frozen-cherry-and-dublin-room-equip-with-blacklinex-1.JPG',
    title: 'Frozen Cherry',
    width: '38%',
  },
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/0a/d3/88/getlstd-property-photo.jpg?w=1200&h=-1&s=1',
    title: 'RAW Beirut',
    width: '38%',
  },
  {
    url: 'https://nightlifeviptables.com/wp-content/uploads/2018/06/bo5.jpg',
    title: 'B018',
    width: '24%',
  },
  {
    url: 'https://magprod-1a27b.kxcdn.com/wp-content/uploads/2022/07/Sayf_Beirut-1024x683.jpg',
    title: 'Sayf',
    width: '40%',
  },
  {
    url: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/de/99/5d/the-ballroom.jpg?w=1200&h=-1&s=1',
    title: "The Ballroom Blitz",
    width: '20%',
  },
  {
    url: 'https://www.procom-me.com/wp-content/uploads/2018/06/caprice-outdoor-4.jpg',
    title: 'Caprice',
    width: '40%',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2" sx={{
        fontFamily: 'Raleway',
      }}>
        All Parties, All Venues, One Scroll Away
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
