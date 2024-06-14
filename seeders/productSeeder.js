const { Product } = require("../models");

async function productSeeder() {
  let products = [];
  for (let i = 0; i < 20; i++) {
    const mangas = [
      {
        name: "Attack on Titan Vol. 1",
        price: "9.99",
        description:
          "El comienzo de la épica saga de titanes devoradores de humanos y los valientes soldados que luchan contra ellos.",
        stock: "50",
        type: "Manga",
        categoryId: 1,
        featured: false,
        pics: "Attack On Titan V.1.jpg",
      },
      {
        name: "Naruto Vol. 1",
        price: "7.99",
        description:
          "Sigue las aventuras del joven ninja Naruto Uzumaki mientras sueña con convertirse en el Hokage.",
        stock: "100",
        type: "Manga",
        categoryId: 1,
        featured: false,
        pics: "NAruto.jpg",
      },
      {
        name: "One Piece Vol. 1",
        price: "8.99",
        description:
          "La búsqueda de Monkey D. Luffy para encontrar el legendario tesoro y convertirse en el Rey de los Piratas.",
        stock: "75",
        type: "Manga",
        categoryId: 1,
        featured: true,
        pics: "One pice.jpg",
      },
      {
        name: "Demon Slayer: Kimetsu no Yaiba Vol. 1",
        price: "9.99",
        description:
          "Tanjiro Kamado se embarca en una misión para salvar a su hermana Nezuko y vengar a su familia.",
        stock: "60",
        type: "Manga",
        categoryId: 1,
        featured: false,
        pics: "Demon Slayer V.1.jpg",
      },
      {
        name: "My Hero Academia Vol. 1",
        price: "10.99",
        description:
          "Izuku Midoriya, un joven sin poderes, sueña con convertirse en un héroe en un mundo lleno de superhumanos.",
        stock: "120",
        type: "Manga",
        categoryId: 1,
        featured: true,
        pics: "Marvel Super Hero V.1.jpg",
      },
      {
        name: "Tokyo Ghoul Vol. 1",
        price: "11.99",
        description:
          "Ken Kaneki, un estudiante universitario, se convierte en mitad ghoul y lucha por sobrevivir en el oscuro mundo de Tokyo.",
        stock: "80",
        type: "Manga",
        categoryId: 1,
        featured: false,
        pics: "One pice.jpg",
      },
      {
        name: "Death Note Vol. 1",
        price: "9.99",
        description:
          "Light Yagami descubre un cuaderno que le permite matar a cualquier persona escribiendo su nombre, desencadenando un juego mortal.",
        stock: "90",
        type: "Manga",
        categoryId: 1,
        featured: true,
        pics: "Deatch Note.jpg",
      },
      {
        name: "Fullmetal Alchemist Vol. 1",
        price: "12.99",
        description:
          "Los hermanos Elric, Edward y Alphonse, buscan la Piedra Filosofal para restaurar sus cuerpos después de un experimento alquímico fallido.",
        stock: "70",
        type: "Manga",
        categoryId: 1,
        featured: false,
        pics: "Poster-Fullmetal V.1.jpg",
      },
      {
        name: "Bleach Vol. 1",
        price: "8.99",
        description:
          "Ichigo Kurosaki obtiene poderes de Soul Reaper y debe proteger a los vivos y a los muertos de los espíritus malignos llamados Hollows.",
        stock: "85",
        type: "Manga",
        categoryId: 1,
        featured: true,
        pics: "One pice.jpg",
      },
      {
        name: "Black Clover Vol. 1",
        price: "9.49",
        description:
          "Asta, un joven sin habilidades mágicas, sueña con convertirse en el Rey Mago en un mundo donde la magia lo es todo.",
        stock: "95",
        type: "Manga",
        categoryId: 1,
        featured: false,
        pics: "Tokyo Ghoul Vol. 1.jpg",
      },
    ];
    const comics = [
      {
        name: "Dead Pool V.1",
        price: "14.99",
        description:
          "El regreso del icónico héroe Spider-Man mientras equilibra su vida escolar con sus aventuras como superhéroe.",
        stock: "50",
        type: "Cómic",
        categoryId: 2,
        featured: true,
        pics: "Dead Pool V.1.jpg",
      },
      {
        name: "Flash V.1",
        price: "19.99",
        description:
          "Bruce Wayne vuelve a la acción como Batman para proteger Gotham City después de años de retiro.",
        stock: "40",
        type: "Cómic",
        categoryId: 2,
        featured: false,
        pics: "Flash V.1.jpg",
      },
      {
        name: "X-Men: Days of Future Past",
        price: "17.99",
        description:
          "Los X-Men luchan contra un futuro apocalíptico dominado por los Centinelas mientras intentan evitar el asesinato que lo causó.",
        stock: "30",
        type: "Cómic",
        categoryId: 2,
        featured: true,
        pics: "X-Men Days of Future Past.jpg",
      },
      {
        name: "The Avengers: Age of Ultron",
        price: "15.99",
        description:
          "Los Vengadores enfrentan la amenaza del robot Ultron, que busca la extinción de la humanidad.",
        stock: "35",
        type: "Cómic",
        categoryId: 2,
        featured: false,
        pics: "The Avengers Age of Ultron.jpeg",
      },
      {
        name: "Wonder Woman: Year One",
        price: "16.99",
        description:
          "Diana Prince descubre sus orígenes y se convierte en la heroína Wonder Woman mientras lucha por la justicia.",
        stock: "45",
        type: "Cómic",
        categoryId: 2,
        featured: true,
        pics: "Wonder Woman Year One V.2.webp",
      },
      {
        name: "The Flash: Rebirth",
        price: "13.99",
        description:
          "Barry Allen regresa como el Flash y debe enfrentar desafíos tanto de su pasado como de su futuro.",
        stock: "55",
        type: "Cómic",
        categoryId: 2,
        featured: false,
        pics: "The Flash  Rebirth.jpg",
      },
      {
        name: "Green Lantern: Secret Origin",
        price: "14.49",
        description:
          "La historia de origen de Hal Jordan y su ascenso como el Green Lantern, protector del sector espacial 2814.",
        stock: "60",
        type: "Cómic",
        categoryId: 2,
        featured: true,
        pics: "Green Lantern Secret Origin.jpg",
      },
      {
        name: "Iron Man: Extremis",
        price: "18.99",
        description:
          "Tony Stark enfrenta una nueva amenaza mientras explora los límites de su armadura Iron Man con la tecnología Extremis.",
        stock: "40",
        type: "Cómic",
        categoryId: 2,
        featured: false,
        pics: "Iron Man Extremis.jpg",
      },
      {
        name: "Captain America: The Winter Soldier",
        price: "20.99",
        description:
          "Steve Rogers, como el Capitán América, se enfrenta a un nuevo enemigo: el Soldado del Invierno.",
        stock: "25",
        type: "Cómic",
        categoryId: 2,
        featured: true,
        pics: "Captain America The Winter Soldier.jpg",
      },
      {
        name: "Guardians of the Galaxy: Cosmic Avengers",
        price: "17.49",
        description:
          "El equipo de los Guardianes de la Galaxia debe proteger el universo de amenazas intergalácticas.",
        stock: "50",
        type: "Cómic",
        categoryId: 2,
        featured: false,
        pics: "Guardians of the Galaxy Cosmic Avengers.jpg",
      },
    ];
    const cards = [
      {
        name: "Magic: The Gathering - Black Lotus",
        price: "9999.99",
        description:
          "Una de las cartas más icónicas y valiosas de Magic: The Gathering, conocida por su gran poder en el juego.",
        stock: "1",
        type: "Carta Coleccionable",
        categoryId: 3,
        featured: true,
        pics: "Magic  The Gathering - Black Lotus.jpg",
      },
      {
        name: "Pokémon - Charizard Holo 1st Edition",
        price: "1200.00",
        description:
          "La carta de Charizard de primera edición, muy codiciada por coleccionistas de Pokémon.",
        stock: "10",
        type: "Carta Coleccionable",
        categoryId: 3,
        featured: false,
        pics: "Pokémon - Charizard Holo 1st Edition.webp",
      },
      {
        name: "Yu-Gi-Oh! - Blue-Eyes White Dragon",
        price: "500.00",
        description:
          "Carta poderosa de Yu-Gi-Oh! con un diseño icónico y valor significativo para los duelistas.",
        stock: "15",
        type: "Carta Coleccionable",
        categoryId: 3,
        featured: true,
        pics: "Yu-Gi-Oh! - Blue-Eyes White Dragon.jpg",
      },
      {
        name: "Magic: The Gathering - Mox Sapphire",
        price: "6000.00",
        description:
          "Una de las cinco Moxen, altamente valorada por su capacidad para generar maná sin costo.",
        stock: "2",
        type: "Carta Coleccionable",
        categoryId: 3,
        featured: false,
        pics: "Magic The Gathering - Mox Sapphire.jpg",
      },
      {
        name: "Pokémon - Pikachu Illustrator",
        price: "300000.00",
        description:
          "Una de las cartas más raras y valiosas de Pokémon, entregada solo a los ganadores de concursos de ilustración en Japón.",
        stock: "1",
        type: "Carta Coleccionable",
        categoryId: 3,
        featured: true,
        pics: "Pokémon - Pikachu Illustrator.jpg",
      },
      {
        name: "Yu-Gi-Oh! - Dark Magician",
        price: "400.00",
        description:
          "Una de las cartas más emblemáticas de Yu-Gi-Oh!, utilizada por el protagonista Yugi Muto en la serie.",
        stock: "20",
        type: "Carta Coleccionable",
        categoryId: 3,
        featured: false,
        pics: "Yu-Gi-Oh! - Dark Magician.webp",
      },
      {
        name: "Magic: The Gathering - Ancestral Recall",
        price: "5000.00",
        description:
          "Una de las cartas más poderosas de Magic: The Gathering, permitiendo al jugador robar tres cartas por solo un maná azul.",
        stock: "3",
        type: "Carta Coleccionable",
        categoryId: 3,
        featured: true,
        pics: "Magic The Gathering - Ancestral Recall.webp",
      },
      {
        name: "Pokémon - Blastoise Holo 1st Edition",
        price: "800.00",
        description:
          "La carta de Blastoise de primera edición, una de las cartas más queridas por los coleccionistas de Pokémon.",
        stock: "5",
        type: "Carta Coleccionable",
        categoryId: 3,
        featured: false,
        pics: "Pokémon - Blastoise Holo 1st Edition.webp",
      },
      {
        name: "Yu-Gi-Oh! - Red-Eyes Black Dragon",
        price: "450.00",
        description:
          "Una de las cartas más populares de Yu-Gi-Oh!, utilizada por Joey Wheeler en la serie.",
        stock: "25",
        type: "Carta Coleccionable",
        categoryId: 3,
        featured: true,
        pics: "Yu-Gi-Oh! - Red-Eyes Black Dragon.webp",
      },
      {
        name: "Magic: The Gathering - Time Walk",
        price: "7000.00",
        description:
          "Una carta muy poderosa de Magic: The Gathering que permite al jugador tomar un turno adicional por solo dos manás.",
        stock: "2",
        type: "Carta Coleccionable",
        categoryId: 3,
        featured: false,
        pics: "Magic The Gathering - Time Walk.jpg",
      },
    ];
    

    products = [...mangas, ...comics, ...cards];
  }
  try {
    await Product.bulkCreate(products);
    console.log("Product seeder is running!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = productSeeder;
