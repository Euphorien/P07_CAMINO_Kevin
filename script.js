import {recipes} from './js/recipe.js';


 const dataFactory = () => {
    
  
    const initRecettes = (id, name, servings, ingredients, time, description, appliance, ustensils) => {
        arrayRecettes.push({ id, name, servings, ingredients, time, description, appliance, ustensils });
    };


    const initIngredient = (ingredient) => {
        arrayIngredients.push(ingredient);
    };

    
    const initTagIngredient = (tagIngredient) => {
        arrayTagIngredients.push(tagIngredient);
    };

    
    const initAppareil = (appareil) => {
        arrayAppareils.push(appareil);
    };

    
    const initTagAppareil = (tagAppareil) => {
        arrayTagAppareils.push(tagAppareil);
    };

    
    const initUstensil = (ustensil) => {
        arrayUstensils.push(ustensil);
    };

   
    const initTagUstensil = (tagUstensil) => {
        arrayTagUstensils.push(tagUstensil);
    };

    
    const setRecettes = (dataRecettes) => {
        arrayRecettes = dataRecettes;
    };
    
    
    const setOrigineRecettes = (dataRecettes) => {
        arrayOrigineRecettes = dataRecettes;
    };

   
    const setIngredient = (dataIngredients) => {
        arrayIngredients = dataIngredients;
    };

    
    const setTagIngredient = (dataTagIngredients) => {
        arrayTagIngredients = dataTagIngredients;
    };

    
    const setAppareil = (dataAppareils) => {
        arrayAppareils = dataAppareils;
    };
    
    
    const setTagAppareil = (dataTagAppareils) => {
        arrayTagAppareils = dataTagAppareils;
    };

    
    const setUstensil = (dataUstensils) => {
        arrayUstensils = dataUstensils;
    };
        
   
    const setTagUstensil = (dataTagUstensils) => {
        arrayTagUstensils = dataTagUstensils;
    };

    const getRecettes = () => {
        return arrayRecettes;
    };
    
   
    const getOrigineRecettes = () => {
        return arrayOrigineRecettes;
    };
    
   
    const getIngredients = () => {
        return arrayIngredients;
    };
    
    const getTagIngredients = () => {
        return arrayTagIngredients;
    };
    
   
    const getAppareils = () => {
        return arrayAppareils;
    };
        
    
    const getTagAppareils = () => {
        return arrayTagAppareils;
    };

    
    const getUstensils = () => {
        return arrayUstensils;
    };
        
    
    const getTagUstensils = () => {
        return arrayTagUstensils;
    };

    /**
     
     search valeur passée dans la barre de recherche
     
     */
    const searchRecettes = (search) => {
        let resultSearch = [];
        for (let i = 0; i < arrayRecettes.length; i++) {
            if (arrayRecettes[i].name.toLowerCase().includes(search)) {
                resultSearch.push(arrayRecettes[i]);
            }
            for (let y = 0; y < arrayRecettes[i].ingredients.length; y++) {
                if (arrayRecettes[i].ingredients[y].ingredient.toLowerCase().includes(search)) {
                    resultSearch.push(arrayRecettes[i]);
                }
            }
            if (arrayRecettes[i].description.toLowerCase().includes(search)) {
                resultSearch.push(arrayRecettes[i]);
            }
        }
        return resultSearch = Array.from(new Set(resultSearch));
    };
    
    
    const searchIngredient = (search) => {
        let resultSearch = [];
        for (let i = 0; i < arrayIngredients.length; i++) {
            if (arrayIngredients[i].toLowerCase().includes(search)) resultSearch.push(arrayIngredients[i]);
        }
        return resultSearch;
    };

    
    const filtreRecetteIngredient = (array, tagIngredient) => {
        let resultSearch = [];
        for (let i = 0; i < array.length; i++) {
            for (let y = 0; y < array[i].ingredients.length; y++) {
                if (array[i].ingredients[y].ingredient.toLowerCase().includes(tagIngredient)) resultSearch.push(array[i]);
            }
        }
        return resultSearch;
    };
    
  
    const searchAppareil = (search) => {
        let resultSearch = [];
        for (let i = 0; i < arrayAppareils.length; i++) {
            if (arrayAppareils[i].toLowerCase().includes(search)) resultSearch.push(arrayAppareils[i]);
        }
        return resultSearch;
    }
}