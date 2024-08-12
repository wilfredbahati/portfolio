const people = [
  {
    name: "Saoirse Culligan",
    profilePic:
      "https://plus.unsplash.com/premium_photo-1691784781482-9af9bce05096?q=80&w=200&h=200&auto=format&fit=crop",
    greeting: "Heileo! Dia duit.",
    linkedIn: "https://www.linkedin.com/in/saoirse-culligan",
  },
  {
    name: "Juan Castillo",
    profilePic:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=200&h=200&auto=format&fit=crop",
    greeting: "Hola! Como estas?",
    linkedIn: "https://www.linkedin.com/in/juan-castillo",
  },
];
const container = document.querySelector("#card-container");

for (let person of people) {
 

  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.classList.add("pic");
  image.src = person.profilePic;

  card.appendChild(image);
  const data = document.createElement("h2");
  data.classList.add("info");
  data.innerText = person.name;

  card.appendChild(data);

  const greeting = document.createElement("p");
  greeting.classList.add("greeting");
  greeting.innerText = person.greeting;

  card.appendChild(greeting);

  const link = document.createElement("a");
  link.classList.add("link");
  link.innerText = "View my linkedIn profile";
link.href=person.linkedIn;
  card.appendChild(link);

  container.appendChild(card);

}




