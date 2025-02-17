import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col h-auto items-center justify-center bg-stone-200 text-black ">
      <div className="flex-col items-center justify-center bg-white  text-black  h-auto w-2/3">
        <Image
          src="/images/image-omelette.jpeg"
          alt=""
          className="lg:rounded-lg sm:w-full w-auto"
          width={700}
          height={700}
        />
        <div className="p-12">
          <h1 className="sm:text-4xl text-4xl font-semibold font-young-serif my-4">
            Simple Omelette Recipe
          </h1>
          <p className="my-8 sm:text-lg font-Outfit">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
          <div className="bg-rose-50 rounded-xl p-4 shadow-sm mb-8">
            <h2 className="font-bold text-pink-800  text-xl">
              Preparation time
            </h2>
            <ul className="list-disc pl-8 space-y-2 text-lg p-4">
              <li className="pl-2 ml-[-0.5em]">
                <span className="font-bold">Total</span>: Approximately 10
                minutes
              </li>
              <li className="pl-2 ml-[-0.5em]">
                <span className="font-bold">Preparation</span>: 5 minutes
              </li>
              <li className="pl-2 ml-[-0.5em]">
                <span className="font-bold">Cooking</span>: 5 minutes
              </li>
            </ul>
          </div>

          <h1 className="text-3xl font-normal font-young-serif my-4 text-Brown-800">
            Ingredients
          </h1>
          <ul className="list-disc pl-8 space-y-2 px-4">
            <li className="pl-2 ml-[-0.5em]">2-3 large eggs</li>
            <li className="pl-2 ml-[-0.5em]">Salt, to taste</li>
            <li className="pl-2 ml-[-0.5em]"> Pepper, to taste</li>
            <li className="pl-2 ml-[-0.5em]">1 tablespoon of butter or oil</li>
            <li className="pl-2 ml-[-0.5em]">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
          <h1 className="text-3xl font-normal font-young-serif my-4 text-Brown-800">
            Instructions
          </h1>
          <ol className="list-decimal pl-8 font-bold text-lg">
            <li>
              Beat the eggs:{" "}
              <span className="font-normal">
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffier texture.
              </span>
            </li>
            <li>
              Heat the pan:{" "}
              <span className="font-normal">
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </span>
            </li>
            <li>
              Cook the omelette:{" "}
              <span className="font-normal">
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </span>
            </li>
            <li>
              Add fillings (optional):
              <span className="font-normal">
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </span>
            </li>
            <li>
              Fold and serve:{" "}
              <span className="font-normal">
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </span>
            </li>
            <li>
              Enjoy:{" "}
              <span className="font-normal">
                Serve hot, with additional salt and pepper if needed.
              </span>
            </li>
          </ol>
          <p></p>
          <h1 className="text-3xl font-normal font-young-serif my-4 text-Brown-800">
            Nutrition
          </h1>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>

          <div className="grid grid-cols-2 w-full border-b-2 mt-4">
            <p>Calories</p>
            <p>Carbs</p>
            <p>Protein</p>
            <p>Fat</p>

            <p>277kcal</p>
            <p>0g</p>
            <p>20g</p>
            <p>22g</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
