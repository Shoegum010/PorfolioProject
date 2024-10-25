import { NavigateNextRounded } from '@mui/icons-material'
import { Box, Breadcrumbs, Link } from '@mui/material'
import React from 'react'
import { IconTitleMap } from '../Utils/Constants'
import "../resources/css/breadcrumb.css";

export default function BreadCrumbComponent({data}) {
    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextRounded />}>
                {
                    data.map((data, index) => (
                        <div className="breadCrumbItem" key={index} >
                            <Link 
                                fontSize={12}
                                sx={{cursor: 'pointer', display: 'flex', alignItems: 'center', pr: 1, pl: 1}} 
                                underline={index === data.length-1 ? "none" : "hover"} 
                                color={index === data.length-1 ? "text.primary" : "inherit"} 
                                to={`/${data}`}
                            >
                                {data}{IconTitleMap[data]}
                            </Link>
                        </div>
                    ))
                }
                </Breadcrumbs>
        </Box>
    )
}
