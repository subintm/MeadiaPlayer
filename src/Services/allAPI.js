import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

//uplaod avideo
 export const uploadNewVideoAPI = async(video)=>{
     return await commonAPI('POST',`${SERVER_URL}/allVideos`,video) 
}

//get all videos
export const getAllVideosAPI = async()=>{
     return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")

}


//insert video to history
export const addVideoToHistoryAPI=async(video)=>{
     return await commonAPI("POST",`${SERVER_URL}/history`,video)

}
export const removeVideoAPI=async(id)=>{
     return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

//get video from history
export const getHistoryAPI=async()=>{
     return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

//remove history
export const removeHistoryAPI=async(id)=>{
     return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})

}

export const getAllCatogoryAPI =async()=>{
     return await commonAPI("GET",`${SERVER_URL}/catogory`,"")
}

//add catogory
export const addCatogoryAPI =async(catogory)=>{
     return await commonAPI("POST",`${SERVER_URL}/catogory`,catogory)
}

export const removeCatogoryAPI=async(id)=>{
     return await commonAPI("DELETE",`${SERVER_URL}/catogory/${id}`,{})
}
//update catogory
export const updateCatogoryAPI =async (id,catogoryDetails)=>{
     return await commonAPI("PUT",`${SERVER_URL}/catogory/${id}`,catogoryDetails)
}

//view single video
export const getAVideosAPI = async(id)=>{
     return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}
