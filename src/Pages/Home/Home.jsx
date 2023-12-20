import usePhones from "../../Hooks/usePhones";

const Home = () => {
   const [phones, phoneLoading] = usePhones();
   if(phoneLoading){
      return <p>Loading..</p>
   }
   console.log(phones);
   return (
      <div>
         <h1>Home Page</h1>
      </div>
   );
};

export default Home;