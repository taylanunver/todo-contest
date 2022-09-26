import { GetStaticProps, GetStaticPaths } from "next";
import axios from "axios";

async function getData() {
  axios
    .get("localhost:3000/api/taylan")
    .then((res) => {
      console.log("Worked");
    })
    .catch((e) => {
      console.log("Error!", e);
    });
}
