import React, { location, useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Loading from "../components/Loading/Loading";

export default function Call() {
  const { user, setUser } = useAuth();
  const history = useHistory();

  const params = new URLSearchParams(window.location.search);
  let gitHubResponseCode =  params.get('code');
  let gitHubResponseError =  params.get('error');
   
  gitHubResponseCode ? setUser(gitHubResponseCode) : setUser(gitHubResponseError)

  if(gitHubResponseError){
    history.push("/")
  } 

  return (
    <section >
        <Loading/>
    </section>
  );
}
