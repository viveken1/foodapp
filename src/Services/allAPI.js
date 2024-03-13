// import { commonAPI } from "../commonAPI"
import { commonAPI } from "./commonAPI"
// import { SERVER_URL } from "../server_url"
import { SERVER_URL } from "./server_url"

export const uploadRecipeAPI = async(recipe)=>{
    return await commonAPI("POST",`${SERVER_URL}/recipes`,recipe)
}

export const getRecipeAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/recipes`,"")
}

export const deleteRecipeAPI = async(recipeId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/recipes/${recipeId}`,{})
}

export const saveHistoryAPI = async (recipeDetails) =>{
    return await commonAPI("POST",`${SERVER_URL}/history`,recipeDetails)
}

export const getHistoryAPI = async () =>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}

export const deleteRecipeHistoryAPI = async(recipeId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${recipeId}`,{})
}

export const getARecipeAPI = async(recipeId)=>{
    return await commonAPI("GET",`${SERVER_URL}/recipes/${recipeId}`,"")
}

export const addFavoriteAPI = async(recipe)=>{
    return await commonAPI("POST",`${SERVER_URL}/favorites`,recipe)
}

export const getFavoriteAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/favorites`,"")
}

export const deleteFavoriteAPI = async(recipeId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/favorites/${recipeId}`,{})
}