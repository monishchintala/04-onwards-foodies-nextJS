const MealDetails = ({ params }) => {
    return <main>
        <h1>Meal Details</h1>
        <p>{params.slug}</p>

    </main>
}

export default MealDetails