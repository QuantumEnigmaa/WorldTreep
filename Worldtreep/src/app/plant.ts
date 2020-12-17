export class plant {
  author: string;
  bibliography: string;
  common_name: string;
  family: string;
  family_common_name: string;
  genus: string;
  genus_id: number;
  id: number;
  image_url: string;
  rank: string;
  scientific_name: string;
  slug: string;
  status: string;
  synonyms: Array<string>;
  year: number;

  constructor(private itemJson: object) {
    // exemple
    // this.withAlcool = itemJson['strAlcoholic'] === 'Alcoholic';
    // this.image = itemJson['strDrinkThumb'];
    // this.listIngredients = itemJson['strIngredient1','strIngredient2','strIngredient3'];

    this.author =  itemJson['author'];
    this.bibliography = itemJson['bibliography'];
    this.common_name =  itemJson['common_name'];
    this.family = itemJson['family'];
    this.family_common_name = itemJson['family_common_name'];
    this.genus = itemJson['genus'];
    this.genus_id = itemJson['genus_id'];
    this.id = itemJson['id'];
    this.image_url = itemJson['image_url'];
    this.rank = itemJson['rank'];
    this.scientific_name = itemJson['scientific_name'];
    this.slug = itemJson['slug'];
    this.status = itemJson['status'];
    this.synonyms = itemJson['synonyms'];
    this.year = itemJson['year'];
  }
}
