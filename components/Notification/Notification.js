import React from "react";
import Bubble from "../icons/Bubble";

export default function Notification(){
    return(
        <div className="flex max-w-sm mx-auto my-0 p-6 rounded-lg bg-white shadow-xl items-center">
        <div  className="flex-shrink-0">
          <picture>
            <Bubble />
          </picture>
        </div>
        <div className="ml-6 pt-1">
          <h4 className="text-gray-900 text-xl">ChitChat</h4>
          <p className="text-gray-500 text-base">You have a new message!</p>
        </div>
        </div>
    )
}