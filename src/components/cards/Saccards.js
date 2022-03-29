import img1 from "../features/gridimages/Rachana_ma'am.jpg"
import img2 from "../features/gridimages/Rashmi Agarwal.jpeg"
import img3 from "../features/gridimages/Meenu Khurana_Chandigarsh_sub-sec.jpeg"
import img4 from "../features/gridimages/Mahesh_jangid.jpeg"
import img5 from "../features/gridimages/rsz_archit_goswami.jpg"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Saccards() {
  return (
    <div>

    <Card sx={{ maxWidth: 345,margin:"auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img1}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Prof. Rachana Garg
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Section Chair and Student Activites Committee Chair
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
    <Card sx={{ maxWidth: 345,margin:"20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img3}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dr. Meenu Khurana
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Student Activites Committee Member
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345,margin:"20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img2}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dr. Rashmi Agarwal
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Student Activites Committee Member
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345,margin:"20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img4}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dr. Mahesh Jangid
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Student Activites Committee Member
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345,margin:"20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="20"
          image={img5}
          
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mr. Archit Goswami
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Student Activites Committee Member
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    {/* <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img1}
          alt="green iguana"
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mr. Archit Goswami
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Student Activites Committee Member
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}

    </div>
          </div>
  );
}
