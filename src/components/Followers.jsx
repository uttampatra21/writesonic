import React from "react";

const Followers = () => {
  const data = [
    {
      img: "https://hotinsocialmedia.com/wp-content/uploads/2023/06/04.webp",
    },
    {
      img: "https://cdn2.avada.io/media/resources/HUAjJ3q.jpg",
    },
    {
      img: "https://hotinsocialmedia.com/wp-content/uploads/2023/06/01.webp",
    },
    {
      img: "https://www.guinnessworldrecords.com/Images/split-photo-of-kylie-jenners-instagram-profile-and-selena-gomez-instagram-profile_tcm25-739529.jpg",
    },
    {
      img: "https://media.sproutsocial.com/uploads/2022/11/Peach-Slides-Bio.png",
    },
    {
      img: "https://blog.sellfy.com/wp-content/uploads/2021/05/Instagram-creator-example-1018x600.png",
    },
    {
      img: "https://petapixel.com/assets/uploads/2018/11/instagramredesign.jpg",
    },
    {
      img: "https://images.ctfassets.net/az3stxsro5h5/2Mm8tA018wmaKq8GfL0P29/ca282dc1b09a8f2e87ba193d0cb08df5/ig-insights",
    },
    {
      img: "https://blog.kicksta.co/wp-content/uploads/2022/03/Screen-Shot-2022-03-06-at-10.08.32-PM-700x282.png",
    },
    {
      img: "https://media.sproutsocial.com/uploads/2023/10/personal-vs-business-instagram-profile.png",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0070/7032/files/ruggable-instagram.png?format=jpg&quality=90&v=1697475746",
    },
    {
      img: "https://blog.hootsuite.com/wp-content/uploads/2021/05/how-to-get-followers-on-instagram-2-620x381.png",
    },
    {
      img: "https://images.firstpost.com/wp-content/uploads/large_file_plugin/2018/11/1542865865_Instagram%20changes.png",
    },
  ];
  return (
    <div id="folowers-sample">
      {data.map((x) => {
        return (
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img className="" src={x.img} />
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default Followers;
