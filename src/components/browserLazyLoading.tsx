import styled from "styled-components";
import { importImagesUrls } from "../utils/images";
import { useEffect, useState } from "react";

const images = importImagesUrls();

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 2em;
  column-gap: 10px;
  max-width: 1024px;
`;

const Image = styled.img`
  /* height: 500px; */
`;

function BrowserLazyLoading() {
  const [isLoading, setLoading] = useState(true);
  const [imagess, setImagess] = useState<{ name: string; blurhash: string }[]>(
    []
  );

  const fetchImages = async () => {
    const images = await fetch("http://localhost:9000/images");

    if (images) {
      setLoading(false);
    }

    setImagess(await images.json());
    console.log("Images: ", await images.json());
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    // <ImagesContainer>
    //   {images.map((url: string) => (
    //     //width and height on images are required for the browser to be able to calculate the viewport
    //     <img
    //       key={url}
    //       src={url}
    //       loading="eager"
    //       alt="image"
    //       height="500"
    //       width="333"
    //     />:
    //   ))}
    // </ImagesContainer>
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ImagesContainer>
          {imagess.map((url: any) => (
            //width and height on images are required for the browser to be able to calculate the viewport
            <img
              key={url.name}
              src={`http://localhost:9000/${url.name}`}
              loading="eager"
              alt="image"
              height="500"
              width="333"
            />
          ))}
        </ImagesContainer>
      )}
    </>
  );
}

export { BrowserLazyLoading };
