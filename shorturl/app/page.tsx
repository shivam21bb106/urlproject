import Image from "next/image";
import UrlForm from "./components/UrlForm";
import Table from './components/Table'
export default function Home() {
  return (
    <>

      Url Short
      <UrlForm />
      <Table />
    </>
  );
}
