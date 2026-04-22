import PlantCard from "@/components/PlantCard";


const PlantsPage = async () => {
    const res = await fetch("http://localhost:6004/plants", {cache: "no-store"});
    const plants = await res.json()
    return (
        <div>
            <h2 className="text-center font-bold">Plants {plants.length}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
                {
                    plants.map(plant => <PlantCard key={plant.id} plant={plant}></PlantCard>)
                }
            </div>
        </div>
    );
};

export default PlantsPage;