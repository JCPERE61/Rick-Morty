import Card from './Card';

export default function Cards(props) {
   const {characters} = props;
   return (
   <div>
      {characters.map(({id, name, species, gender, image}) => (
         <Card
         key = {id}
         name={name}
         species = {species}
         gender = {gender}
         image = {image}
         onclose={() => window.alert("Simulating card closing")}
         />
      ))};
   </div>
   );        
}