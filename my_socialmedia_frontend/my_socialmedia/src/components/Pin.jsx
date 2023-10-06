import React from "react";
import { client, urlFor } from '../client';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { MdDownloadForOffline} from 'react-icons/md';
import { AiTwotoneDelete} from 'react-icons/ai';
import { BestArrowUpRightCrcleFill} from 'react-icons/bs'
import { fetchUser } from "../utils/fetchUser";

const Pin = ({pin: {postedBy, image, _id, destination , save}}) => {

    const [postHovered, setPostHovered] = useState(false);
    const [savingPost, setSavingPost] = useState(false);
    const navigate = useNavigate();

    const user = fetchUser();

    const alreadySaved = save?.filter((item) => item.postedBy._id === user.googleId);

    return (
        <div className="m-2">
            <div
                onMouseEnter={() => setPostHovered(true)}
                onMouseLeave={() => setPostHovered(false)}
                onClick={() => Navigate(`/pin-detail/${_id}`)}
                className="relative cursor-zoom-in w-auto hover:shadow-lg ease-in-out overflow-hidden transition-all duration-700"
            >
                <img className="rounded-lg w-full" alt="user-post" src={urlFor(image.width(250).url())}/>

                {postHovered && 
                    <div style={{height: '100%'}} className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2 pb-2 z-50">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                                <a 
                                    href={`${image?.asset?.url}?dl`}
                                    download
                                    onClick={(e) => e.stopPropagation()}
                                    className="bg-white w-9 h-9 rounded-full flex justify-center text-dark 
                                    text-xl opacity-75 hover:opacity-100 hover:shadow-md outline-none items-center"
                                >
                                    <MdDownloadForOffline/>
                                </a>
                            </div>
                            {alreadySaved?.length !==0 ? (
                                <button>
                                    Saved
                                </button>
                            ):(
                                <button>
                                    Save
                                </button>
                            )}
                        </div>
                    </div>
                }
            </div>
           
        </div>
    )

}

export default Pin;