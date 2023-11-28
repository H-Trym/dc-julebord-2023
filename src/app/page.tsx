"use client";

import Image from "next/image";
import "animate.css";
import { useState } from "react";
import Face from "./components/face";

export default function Home() {
  const [isChristmas, setIsChristmas] = useState(false);

  const handleChristmas = () => {
    setIsChristmas(!isChristmas);
  };

  return (
    <>
      <div
        className="animate__animated animate__infinite animate__pulse call-to-christmas"
        onClick={handleChristmas}
      >
        <Image
          src="/christmas-bell.webp"
          alt="christmas bell"
          width={50}
          height={50}
        />
        <p className="text-sm">Ring julen inn</p>
      </div>
      <div className="face-container">
        <Face isChristmas={isChristmas} name="anders" />
        <Face isChristmas={isChristmas} name="andreas" />
        <Face isChristmas={isChristmas} name="arisa" />
        <Face isChristmas={isChristmas} name="beate" />
        <Face isChristmas={isChristmas} name="brian" />
        <Face isChristmas={isChristmas} name="fredrik" />
        <Face isChristmas={isChristmas} name="joakim" />
        <Face isChristmas={isChristmas} name="kine" />
        <Face isChristmas={isChristmas} name="morten" />
        <Face isChristmas={isChristmas} name="simenL" />
        <Face isChristmas={isChristmas} name="simenR" />
        <Face isChristmas={isChristmas} name="thomas" />
        <Face isChristmas={isChristmas} name="torkel" />
        <Face isChristmas={isChristmas} name="trym" />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-12 md:p-24">
        <div className="animate__animated animate__swing header">
          <h1>Velkommen til DC julebord</h1>
        </div>
        <div className="image-wrapper">
          <Image src="/Bergen.png" alt="bergen" width="200" height="45"></Image>
        </div>
        <div className="animate__animated animate__backInLeft tidspunkt">
          <p className="dag">Torsdag</p>
          <p>30. November</p>
          <div className="klokkeslett">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            16:00
          </div>
        </div>

        <div className="animate__animated animate__backInRight kleskode">
          <span className="text-bold">Kleskode:</span> laibikk og sjøstøvler 🌧️
        </div>

        <h2 className="animate__animated animate__backInLeft text-xl mb-10 mt-5">
          Program
        </h2>
        <div className="animate__animated animate__backInLeft program-container">
          <div className="container-col1">
            <div className="program-item">
              <p className="program-klokkeslett">16:00</p>
              <p className="program-tittel">Pakk vekk maskinen</p>
              <p className="program-desc">Raska på</p>
            </div>
            <div className="program-item">
              <p className="program-klokkeslett">16:30</p>
              <p className="program-tittel">Bekkalokk-kast</p>
              <p className="program-desc">
                Nasjonalsport, trenger ikke beskrivelse
              </p>
            </div>
            <div className="program-item">
              <p className="program-klokkeslett">17:00</p>
              <p className="program-tittel">flasketuten peker på</p>
              <p className="program-desc">Snurr flasken</p>
            </div>
            <div className="program-item">
              <p className="program-klokkeslett">18:00</p>
              <p className="program-tittel">Oppmøte, og velkomstdrink ✨</p>
              <p className="program-desc">
                Tørrprat, bobler i glasset og taffelmusikk
              </p>
            </div>
            <div className="program-item">
              <p className="program-klokkeslett">18:30</p>
              <p className="program-tittel">Bordsetting ✨</p>
              <p className="program-desc">
                Ypper serverer julegastronomi av ypperste klasse
              </p>
            </div>
            <div className="program-item">
              <p className="program-klokkeslett">20:00</p>
              <p className="program-tittel">Faglig innslag ✨</p>
              <p className="program-desc">
                Thomas sørger for litt vett inn før vett ut
              </p>
            </div>
            <div className="program-item">
              <p className="program-klokkeslett">20:30</p>
              <p className="program-tittel">Bossjonglering</p>
              <p className="program-desc">tittelmesterskap</p>
            </div>
          </div>
          <div className="container-col2">
            <div className="program-item">
              <p className="program-klokkeslett">20:30</p>
              <p className="program-tittel">Undikkløp</p>
              <p className="program-desc">enda et kappløp?</p>
            </div>
            <div className="program-item">
              <p className="program-klokkeslett">20:30</p>
              <p className="program-tittel">
                Balansekonkurranse med naien i været
              </p>
              <p className="program-desc">Hvem er den stødigste på kontoret?</p>
            </div>
            <div className="program-item">
              <p className="program-klokkeslett">21:00</p>
              <p className="program-tittel">Dåp ✨</p>
              <p className="program-desc">Jeg tok min nystemte..</p>
            </div>
            <div className="program-item">
              <p className="program-klokkeslett">21:00</p>
              <p className="program-tittel">Pakkelek ✨</p>
              <p className="program-desc">Pilotprosjekt - Ny bonusmodell</p>
            </div>
            <div className="program-item">
              <p className="program-klokkeslett">22:00</p>
              <p className="program-tittel">Kunstnerisk innslag ✨</p>
              <p className="program-desc">
                Peakon avdekker ønske om mer kunst og kultur
              </p>
            </div>
            <div className="program-item">
              <p className="program-klokkeslett">22:30</p>
              <p className="program-tittel">Rett i flaisen</p>
              <p className="program-desc">Familievennlig bergensspill</p>
            </div>
            <div className="program-item">
              <p className="program-klokkeslett">23:00</p>
              <p className="program-tittel">Workshop ✨</p>
              <p className="program-desc">
                Captain Jack - fra fossefall til agil tilnærming
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
