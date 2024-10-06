'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const checkInvalid = (text) => {
    return (!text || text.trim() === "")
}

const shareMeal = async (prvsFormData, formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    }

    if (
        checkInvalid(meal.title) ||
        checkInvalid(meal.summary) ||
        checkInvalid(meal.instructions) ||
        checkInvalid(meal.creator) ||
        checkInvalid(meal.creator_email) ||
        !(meal.creator_email.includes("@")) ||
        !meal.image || meal.image.size === 0
    ) {
        return {
            message: "Invaild Text"
        }
    }

    await saveMeal(meal)
    revalidatePath("/meals")
    redirect('/meals')
}

export default shareMeal;