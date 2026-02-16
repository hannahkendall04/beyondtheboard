"use client";
import React, { useState } from "react";
import { Card, CardContent, CardMedia, CardActionArea, Collapse } from "@mui/material"

interface AboutCardProps {
    name: string,
    imageUrl: string,
    role: string,
    bio: string,
}

const AboutCard: React.FC<AboutCardProps> = ({ name, imageUrl, role, bio }) => {

    const [isFlipped, setFlipped] = useState(false);

    return (
        <div>
            {isFlipped ?
                <Card variant="outlined" sx={{
                    "width": 300,
                    "marginTop": 2
                }}> <CardActionArea
                    onClick={() => setFlipped(!isFlipped)}
                >
                    <CardMedia
                            sx={{ height: 240 }}
                            image={imageUrl}
                            title={name}
                        />
                        <CardContent>
                            <h1>{name}</h1>
                            <h2>{role}</h2>
                            <p>{bio}</p>
                        </CardContent>
                    </CardActionArea>
                </Card>
                : <CardActionArea
                    onClick={() => setFlipped(!isFlipped)}
                >
                    <Card variant="outlined" sx={{
                        "width": 300,
                        "marginTop": 2
                    }}>
                        <CardMedia
                            sx={{ height: 240 }}
                            image={imageUrl}
                            title={name}
                        />
                        <CardContent>
                            <h1>{name}</h1>
                            <h2>{role}</h2>
                        </CardContent>
                    </Card>
                </CardActionArea>
            }
        </div>
    );

    // ALTERNATIVE STYLING
    // return (
    //         <Card variant="outlined" sx={{
    //             "width": 300,
    //             "marginTop": 2
    //         }}>
    //             <CardMedia
    //                 sx={{ height: 240 }}
    //                 image={imageUrl}
    //                 title={name}
    //             />
    //             <CardActionArea
    //         onClick={() => setFlipped(!isFlipped)}
    //     >
    //             <CardContent>
    //                 <h1>{name}</h1>
    //                 <h2>{role}</h2>
    //             </CardContent>
    //             </CardActionArea>
    //             <Collapse in={isFlipped} timeout="auto">
    //                 <CardContent>
    //                     <p>
    //                         {bio}
    //                     </p>
    //                 </CardContent>
    //             </Collapse>
    //         </Card>
    // );
}

export default AboutCard;