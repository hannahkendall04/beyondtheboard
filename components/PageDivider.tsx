import { Box } from "@mui/material";
import React from 'react';

interface PageDividerProps {
    text?: string
}

const PageDivider: React.FC<PageDividerProps> = ({text}) => {

    return(
        <Box
            sx={{
                minHeight: 80,
                display: "flex",
                // backgroundColor: "var(--accent-2)",
                width: "100%",
                position: "relative",
                left: "50%",
                right: "50%",
                marginLeft: "-50%",
                marginRight: "-50%",
                alignItems: "center",
                justifyContent: "center",
                // borderBottom: "3px solid var(--accent-2)"
                
            }}>
                <Box sx={{
                    width: 400,
                    borderBottom: "2px solid var(--accent-2)",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginBottom: 2
                }}>
                {
                    text ? 
                    <h1 className="big-header">
                        {text}
                    </h1> :
                    <></>
                }
                </Box>
        </Box>
    );
}

export default PageDivider;