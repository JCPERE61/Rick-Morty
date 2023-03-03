/* eslint-disable jsx-a11y/img-redundant-alt */
export default function Card({name, species, gender, image, onclose}) {
   return (
      <div>
         <button onClick={onclose}>X</button>
         <h2>{name}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <img  src={image} alt="No image displayed" />
      </div>
   );
   }