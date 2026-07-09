import { Injectable } from '@angular/core';
import { TourDate } from 'src/data/TourDate';

@Injectable({
  providedIn: 'root',
})
export class TourDateService {
  constructor() {}

  getTourDates(): TourDate[] {
    return [
      {
        date: "21/08/26",
        event: "Angra",
        location: "Santa Bárbara D’oeste, Brasil",
        venue: "Santa Bárbara Rock Fest",
        ticketsUrl: "https://www.rockfestsbo.com/",
        posterUrl: "https://angra.net/wp-content/uploads/2026/05/angra-santa-barbara.jpg"
      },
      {
        date: "22/08/26",
        event: "Angra",
        location: "Buenos Aires, Argentina",
        venue: "Arena Sur",
        ticketsUrl: "https://www.passline.com/eventos/angra-en-argentina-30-anos-de-holy-land",
        meetAndGreetUrl: "https://tix.soundrink.com/tours/Rm3BwJz3XXP0YYeZEtfVa0UYCRwgLARG",
        posterUrl: "https://angra.net/wp-content/uploads/2026/05/Angra_Argentina_2026.jpg"
      },
      {
        date: "23/08/26",
        event: "Angra",
        location: "Santiago, Chile",
        venue: "Teatro Teletón",
        ticketsUrl: "https://www.eventrid.cl/eventos/atenea/angra-holy-land",
        meetAndGreetUrl: "https://tix.soundrink.com/tours/0jNfWaVBYL9I0oEVBn00W6imCUPV1KEh",
        posterUrl: "https://angra.net/wp-content/uploads/2026/05/Angra_Santiago_Show.jpg"
      },
      {
        date: "25/08/26",
        event: "Angra",
        location: "Lima, Peru",
        venue: "CC Leguia",
        ticketsUrl: "https://www.ticketmaster.pe/event/angra-en-lima-2026---30-aniversario-de-holy-land-venta-general",
        posterUrl: "https://angra.net/wp-content/uploads/2026/06/25-08.jpg"
      },
      {
        date: "05/09/26",
        event: "Angra",
        location: "Belo Horizonte, Brasil",
        venue: "Minascentro",
        ticketsUrl: "https://bileto.sympla.com.br/event/121100",
        meetAndGreetUrl: "https://www.clubedoingresso.com/evento/meetegreet-angra-belohorizonte",
        posterUrl: "https://angra.net/wp-content/uploads/2026/05/Angra-BH-2026.jpg"
      },
      {
        date: "12/09/26",
        event: "Angra + Kiko Loureiro",
        location: "Athens, Greece",
        venue: "Rock Hard Fest",
        ticketsUrl: "https://www.rockhardfestival.gr/",
        posterUrl: "https://angra.net/wp-content/uploads/2026/05/angra-greece-2026.jpg"
      },
      {
        date: "18/09/26",
        event: "Angra",
        location: "Rio de Janeiro, Brasil",
        venue: "Vivo Rio",
        ticketsUrl: "https://www.ticket360.com.br/evento/33402/ingressos-para-angra",
        meetAndGreetUrl: "https://www.clubedoingresso.com/evento/meetandgreet-angra-riodejaneiro",
        posterUrl: "https://angra.net/wp-content/uploads/2026/06/18-09.jpg"
      },
      {
        date: "23/09/26",
        event: "Angra + Kiko Loureiro",
        location: "Paris, France",
        venue: "L’Olympia",
        ticketsUrl: "https://www.olympiahall.com/en/upcoming-events/angra/",
        posterUrl: "https://angra.net/wp-content/uploads/2026/05/angra-france-2026.jpg"
      },
      {
        date: "25/09/26",
        event: "Angra",
        location: "Curitiba, Brasil",
        venue: "Live Curitiba",
        ticketsUrl: "https://www.bilheteriadigital.com/angra-holy-land-30th-anniversary-tour-25-de-setembro",
        meetAndGreetUrl: "https://www.clubedoingresso.com/evento/meetegreetangra-curitiba",
        posterUrl: "https://angra.net/wp-content/uploads/2026/06/25-09.png"
      },
      {
        date: "27/09/26",
        event: "Angra",
        location: "Porto Alegre, Brasil",
        venue: "Araújo Vianna",
        ticketsUrl: "https://bileto.sympla.com.br/event/120437",
        meetAndGreetUrl: "https://www.clubedoingresso.com/evento/meetgreetangra-portoalegre",
        posterUrl: "https://angra.net/wp-content/uploads/2026/05/angra-porto-alegre-2026.jpg"
      },
      {
        date: "02/10/26",
        event: "Angra + Luis Mariutti",
        location: "São Paulo, Brasil",
        venue: "Tokio Marine Hall",
        ticketsUrl: "https://www.ticketmaster.com.br/event/angra-tokio-marine",
        meetAndGreetUrl: "https://www.clubedoingresso.com/evento/meetandgreet-angra-tokiomarinehall-02-10",
        posterUrl: "https://angra.net/wp-content/uploads/2026/05/angra-sao-paulo-2026.jpg"
      },
      {
        date: "03/10/26",
        event: "Angra + Edu Falaschi",
        location: "São Paulo, Brasil",
        venue: "Tokio Marine Hall",
        ticketsUrl: "https://www.ticketmaster.com.br/event/angra-tokio-marine",
        meetAndGreetUrl: "https://www.clubedoingresso.com/evento/meetandgreet-angra-tokiomarinehall-03-10",
        posterUrl: "https://angra.net/wp-content/uploads/2026/05/angra-sao-paulo-2026.jpg"
      },
      {
        date: "18/10/26",
        event: "Angra",
        location: "Bangkok, Thailand",
        venue: "Mr. Fox Live House",
        ticketsUrl: "https://www.ticketmelon.com/slammanbookingasia/Angra1",
        posterUrl: "https://angra.net/wp-content/uploads/2026/06/18-10.jpg"
      },
      {
        date: "22/10/26",
        event: "Angra",
        location: "Shanghai, China",
        venue: "Star Culture Center Dream Hall",
        ticketsUrl: "https://wap.showstart.com/pages/activity/detail/detail?ssfrom=user-2604886&activityId=301141",
        posterUrl: "https://angra.net/wp-content/uploads/2026/06/22-10.jpg"
      },
      {
        date: "25/10/26",
        event: "Angra + Kiko + Edu",
        location: "Yokohama, Japan",
        venue: "Full Metal Japan",
        ticketsUrl: "https://fullmetaljapan.com/",
        posterUrl: "https://angra.net/wp-content/uploads/2026/05/angra-japan-2026.jpg"
      }
    ];
  }
}
