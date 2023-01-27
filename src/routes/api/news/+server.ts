import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    return new Response(JSON.stringify(
        {
            "pagination": {
              "limit": 25,
              "offset": 0,
              "count": 25,
              "total": 10000
            },
            "data": [
              {
                "author": null,
                "title": "Insolite : Un imam appelé par la mairie pour exorciser un immeuble de Fontenay-aux-Roses",
                "description": "Les locataires HLM des Blagis à Fontenay-aux-Roses (Île-de-France) ont, cette semaine, que les parties communes de leur bâtiment se produit des «phénomènes surnaturels» va être exorcisées par un prêtre et un imam. Selon les médias français, qui reprennent une information du Parisien, les habitants ont adressé, en mai dernier, une lettre à la commune pour signaler une présence anormale, des bruits étranges et même des ombres au niveau dudit bâtiment.  Ainsi, quatre mois après avoir prévenu la mairie que leur immeuble était «hanté», les habitants du HLM des Blagis...",
                "url": "https://www.yabiladi.com/articles/details/132843/insolite-imam-appele-mairie-pour.html",
                "source": "yabiladi.com",
                "image": "https://static.yabiladi.com/files/articles/feff5012aa68d058cebf9353e50f6ef420221014185136150.jpg",
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-14T18:40:00+00:00"
              },
              {
                "author": null,
                "title": "Mehdi Ben Barka avait dit non à la guerre des Sables entre le Maroc et l\u0027Algérie",
                "description": "En octobre 1963, alors que les tambours de la guerre résonnaient aux frontières maroco-algériennes suite au déclenchement de la guerre des Sables, Mehdi Ben Barka, défenseur du rêve d\u2019un grand Maghreb, avait qualifié ce conflit de «fratricide». Sa position lui vaudra une condamnation à la peine capitale par contumace et le titre d\u2019ennemi numéro 1 de Hassan II.",
                "url": "https://www.yabiladi.com/articles/details/82863/mehdi-barka-avait-guerre-sables.html",
                "source": "yabiladi.com",
                "image": "https://static.yabiladi.com/files/articles/78bbba27fa199cd20a86b56da960101520190904202900150.jpg",
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-15T06:00:00+00:00"
              },
              {
                "author": null,
                "title": "\u0628\u0639د \u0623\u0646 \u0627\u0634ت\u0647\u0631ت \u0628ت\u0642\u0628ي\u0644\u0647\u0627 \u0642د\u0645 \u0632\u0648ج\u0647\u0627 \u0642\u0628\u0644 \u0026quot;\u0627\u0644\u0643\u0627\u0646\u0026quot;.. \u0627\u0644\u0633ي\u0631\u0627\u0644ي\u0648\u0646ي \u0026quot;ت\u0648\u0645\u0628\u0648\u0026quot; ي\u0646\u0642\u0644 \u0644\u0644\u0645\u0633ت\u0641\u0649 \u0625ث\u0631 \u0645ح\u0627\u0648\u0644ت\u0647 \u0627\u0644\u0627\u0646تح\u0627\u0631 \u0628\u0633\u0628\u0628 \u0641\u0634\u0644\u0647 \u0641ي \u0627\u0644\u0635\u0644ح \u0645\u0639 \u0632\u0648جت\u0647 ح\u0648\u0627\u0621",
                "description": "ت\u0639\u0631\u0636 \u0627\u0644\u0631\u0623ي \u0627\u0644\u0639\u0627\u0645 \u0627\u0644\u0633ي\u0631\u0627\u0644ي\u0648\u0646ي، \u0635\u0628\u0627ح ي\u0648\u0645\u0647 \u0627\u0644خ\u0645ي\u0633، \u0644\u0640\u0022\u0635د\u0645\u0629\u0022، \u0628\u0639د \u0645ح\u0627\u0648\u0644\u0629 \u0644\u0627\u0639\u0628 \u0645\u0646تخ\u0628\u0647 \u0627\u0644\u0648\u0637\u0646ي \u0645\u0648\u0633\u0649 ت\u0648\u0645\u0628\u0648، \u0627\u0644\u0627\u0646تح\u0627\u0631 \u0639\u0628\u0631 \u0637\u0639\u0646 \u0646\u0641\u0633\u0647 \u0628\u0627\u0644\u0633\u0643ي\u0646. \u0648ت\u0639\u0648د \u0641\u0635\u0648\u0644 \u0627\u0644ح\u0643\u0627ي\u0629، \u0644\u0644\u0645\u0634\u0627\u0643\u0644 \u0627\u0644تي ج\u0645\u0639ت\u0647 \u0628\u0632\u0648جت\u0647 \u0022ح\u0648\u0627\u0621\u0022، حيث \u0638\u0647\u0631 \u0645\u0648\u0633\u0649 ت\u0648",
                "url": "http://www.elbotola.com/article/2022-10-13-14-38-895.html",
                "source": "Elbotola.com",
                "image": null,
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-13T14:40:29+00:00"
              },
              {
                "author": "monjed jado",
                "title": "IOF kill four Palestinians in the west bank ",
                "description": "Bethlehem/PNN/ Israeli occupation forces \u0026#8220;IOF\u0026#8221;  killed four Palestinians men in Ramallah \u0026 Jenin cytes in the west bank in the last 24 hours according local Palestinian sources. Palestinian shot dead, six others injured, by Israeli forces in Jenin A Palestinians was shot dead by Israeli gunfire, while six others, including a doctor, were injured, during \u0026#8230;\u0627\u0644تد\u0648ي\u0646\u0629 IOF kill four Palestinians in the west bank  \u0638\u0647\u0631ت \u0623\u0648\u0644\u0627ً \u0639\u0644\u0649 PNN.",
                "url": "http://english.pnn.ps/2022/10/15/iof-kill-four-palestinians-in-the-west-bank/",
                "source": "english",
                "image": null,
                "category": "general",
                "language": "ar",
                "country": "ps",
                "published_at": "2022-10-15T07:01:19+00:00"
              },
              {
                "author": null,
                "title": "Les diasporas africaines de France se dotent d\u0027un «Haut-commissariat»",
                "description": "Un «Haut-commissariat» qui représente les principales diasporas africaines de France a été présenté vendredi en banlieue parisienne. Son objectif est de «faire bouger les choses sur le plan politique», notamment en matière de lutte contre les discriminations et de resserrement des liens avec lAfrique, indique l\u2019AFP.",
                "url": "https://www.yabiladi.com/articles/details/132853/diasporas-africaines-france-dotent-d-un.html",
                "source": "yabiladi.com",
                "image": "https://static.yabiladi.com/files/articles/c98009ae5d8ff2d47af90b414397e53120221015122257150.jpeg",
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-15T10:26:00+00:00"
              },
              {
                "author": null,
                "title": "\u0627\u0644ج\u0639\u0648\u0627\u0646ي \u0644\u0640\u0026quot;\u0627\u0644\u0628\u0637\u0648\u0644\u0629\u0026quot;: \u0026quot;\u0623\u0648\u0644\u0645\u0628ي\u0643 \u0622\u0633\u0641ي ي\u0645\u0644\u0643 \u0641\u0631ي\u0642\u0627 \u0642\u0648ي\u0627ً.. \u0646ح\u0646 \u0633\u0639د\u0627\u0621 \u0628\u0647\u0630\u0627 \u0627\u0644\u0627\u0646ت\u0635\u0627\u0631 \u0648\u0623\u0646\u0627\u0634د \u0623\u0646\u0635\u0627\u0631 \u0627\u0644\u0645\u0648\u0644\u0648دي\u0629 \u0627\u0644\u0639\u0648د\u0629 \u0644\u0644\u0645د\u0631ج\u0627ت\u0026quot;",
                "description": "\u0642\u0627\u0644 \u0645د\u0631\u0628 \u0645\u0648\u0644\u0648دي\u0629 \u0648جد\u0629، \u0645\u0646ي\u0631 \u0627\u0644ج\u0639\u0648\u0627\u0646ي، \u0625\u0646 \u0627\u0644\u0627\u0646ت\u0635\u0627\u0631 \u0627\u0644\u0630ي ح\u0642\u0651\u0642\u0647 \u0641\u0631ي\u0642\u0647 \u0639\u0644\u0649 ح\u0633\u0627\u0628 \u0623\u0648\u0644\u0645\u0628ي\u0643 \u0622\u0633\u0641ي \u0644\u0645 ي\u0643\u0646 \u0628\u0627\u0644ي\u0633ي\u0631، خ\u0627\u0635\u0629 \u0623\u0646 \u0627\u0644\u0643تي\u0628\u0629 \u0627\u0644\u0645\u0633\u0641ي\u0648ي\u0629 ت\u0648\u0642\u0639 \u0639\u0644\u0649 \u0646ت\u0627\u0626ج \u0625يج\u0627\u0628ي\u0629 \u0648ت\u0645\u0644\u0643 \u0645ج\u0645\u0648\u0639\u0629 \u0642\u0648ي\u0629 \u0647\u0630\u0627 \u0627\u0644\u0645\u0648\u0633\u0645 \u0639\u0644\u0649 حد \u0642\u0648\u0644\u0647، \u0644\u0627\u0641ت",
                "url": "http://www.elbotola.com/article/2022-10-14-21-53-197.html",
                "source": "Elbotola.com",
                "image": null,
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-14T21:55:30+00:00"
              },
              {
                "author": null,
                "title": "د\u0648\u0631ي \u0623\u0628\u0637\u0627\u0644 \u0623\u0641\u0631ي\u0642ي\u0627/ \u0645\u0627\u0645ي\u0644\u0648دي \u0635\u0646د\u0627\u0648\u0646\u0632 يت\u0623\u0647\u0644 \u0644د\u0648\u0631 \u0627\u0644\u0645ج\u0645\u0648\u0639\u0627ت \u0628\u0641\u0648\u0632\u0647 \u0026quot;\u0630\u0647\u0627\u0628\u0627 \u0648\u0625ي\u0627\u0628\u0627\u0026quot; \u0639\u0644\u0649 \u0026quot;\u0644\u0627 \u0628\u0627\u0633\u0026quot; \u0645\u0646 \u0627\u0644\u0633ي\u0634\u0644 \u0628\u0646تيج\u0629 (15-1)",
                "description": "جدد \u0641\u0631ي\u0642 \u0645\u0627\u0645ي\u0644\u0648دي \u0635\u0646د\u0627\u0648\u0646\u0632 \u0627\u0644ج\u0646\u0648\u0628 \u0623\u0641\u0631ي\u0642ي، \u0641\u0648\u0632\u0647 \u0639\u0644\u0649 \u0641\u0631ي\u0642 \u0022\u0644\u0627 \u0628\u0627\u0633\u0022 \u0645\u0646 \u0627\u0644\u0633ي\u0634\u0644، \u0628تغ\u0644\u0628\u0647 \u0639\u0644ي\u0647 \u0628ح\u0635\u0629 \u0643\u0628ي\u0631\u0629 \u0627\u0644ي\u0648\u0645 \u0627\u0644ج\u0645\u0639\u0629 (8-1)، \u0641ي \u0625ي\u0627\u0628 د\u0648\u0631ي \u0627\u0644\u0640 32، \u0644يحج\u0632 \u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0639\u0628\u0648\u0631 \u0625\u0644\u0649 د\u0648\u0631 \u0627\u0644\u0645ج\u0645\u0648\u0639\u0627ت \u0644\u0645\u0633\u0627\u0628\u0642\u0629 د\u0648\u0631ي \u0623\u0628\u0637\u0627\u0644 \u0623\u0641\u0631ي\u0642",
                "url": "http://www.elbotola.com/article/2022-10-14-17-32-370.html",
                "source": "Elbotola.com",
                "image": null,
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-14T17:45:33+00:00"
              },
              {
                "author": null,
                "title": "Bachir Dkhil : «La réconciliation proposée par le Polisario est un leurre»",
                "description": "Bachir Dkhil, ancien membre fondateur du Front Polisario, analyse dans cette interview accordée à Yabiladi, la «réconciliation» proposée par Brahim Ghali aux Sahraouis des camps de Tindouf.",
                "url": "https://www.yabiladi.com/articles/details/132783/bachir-dkhil-reconciliation-proposee-polisario.html",
                "source": "yabiladi.com",
                "image": "https://static.yabiladi.com/files/articles/575832945aae951f8d5d90a00c461bd120221013151631150.jpg",
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-13T13:20:00+00:00"
              },
              {
                "author": null,
                "title": "\u0645\u0624\u0631خ \u0633ُ\u0646\u0651\u0650ي\u0651ٌ يد\u0639\u0648 \u0625\u0644\u0649 \u0627\u0644ح\u0648\u0627\u0631 \u0648 \u0627\u0644ت\u0639\u0627ي\u0634 \u0645\u0639 \u0627\u0644\u0634ي\u0639\u0629 \u0648 ي\u0624\u0643د: -\u0627\u0644تي\u0627\u0631\u0627ت \u0627\u0644دي\u0646ي\u0629- \u0623\u0639د\u0645ت \u0627\u0644\u0625\u0633\u0644\u0627\u0645 \u0628تح\u0631ي\u0645\u0647\u0627 -\u0639\u0644\u0645 \u0627\u0644\u0643\u0644\u0627\u0645- - \u0639\u0644جي\u0629 \u0639ي\u0634",
                "description": "#\u0627\u0644ح\u0648\u0627\u0631_\u0627\u0644\u0645ت\u0645د\u0646 #\u0639\u0644جي\u0629_...",
                "url": "https://www.ssrcaw.org/ar/show.art.asp?aid=771280",
                "source": "Ahewar.org",
                "image": "https://www.ahewar.org/debat/images/fpage/art/11.jpg",
                "category": "general",
                "language": "ar",
                "country": "iq",
                "published_at": "2022-10-13T11:25:31+00:00"
              },
              {
                "author": null,
                "title": "Canada : Deux arrestations pour le meurtre du Marocain Achraf Thimoumi",
                "description": "Les autorités canadiennes ont arrêté, cette semaine, deux hommes de 35 et 34 ans accusés du meurtre au premier degré d\u2019Achraf Thimoumi. L\u2019étudiant marocain à l\u2019Institut Aviron de Montréal avait été retrouvé mort, dans un véhicule sur le chemin des Familles en bordure du boulevard Talbot à Stoneham, dans la province de Québec, en août dernier. Selon Radio Canada, la Sûreté du Québec (SQ) a procédé mercredi à larrestation de Keven Prévost-Bouchard et dÉric Guénette. Leur comparution a eu lieu jeudi matin par visioconférence au palais de justice de Québec.",
                "url": "https://www.yabiladi.com/articles/details/133319/canada-deux-arrestations-pour-meurtre.html",
                "source": "yabiladi.com",
                "image": "https://static.yabiladi.com/files/articles/259246b2f11d047519c45041beb816d920221028150410150.jpg",
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-28T13:10:00+00:00"
              },
              {
                "author": "\u0625\u0639\u0644\u0627\u0645",
                "title": "\u0645ي\u0627\u0631 \u0627\u0644\u0628\u0628\u0644\u0627\u0648ي: \u0022\u0623ح\u0645د \u0631\u0632\u0642 \u0642\u0644\u0628\u0647 \u0623\u0633\u0648د \u0639\u0634\u0627\u0646 \u0645\u0634 \u0631\u0627\u0636ي ي\u0635\u0627\u0644ح\u0646ي\u0022 - E3lam.Com",
                "description": "\u0643\u0634\u0641ت \u0627\u0644\u0641\u0646\u0627\u0646\u0629 \u0645ي\u0627\u0631 \u0627\u0644\u0628\u0628\u0644\u0627\u0648ي \u0639\u0646 ت\u0641\u0627\u0635ي\u0644 \u0627\u0644خ\u0644\u0627\u0641 \u0628ي\u0646\u0647\u0627 \u0648\u0628ي\u0646 \u0627\u0644\u0641\u0646\u0627\u0646 \u0623ح\u0645د \u0631\u0632\u0642، \u0648\u0627\u0644\u0630ي \u0627\u0633ت\u0645\u0631 \u0644\u0640 \u0633\u0646\u0648\u0627ت \u0639ديد\u0629، \u0645\u0624\u0643د\u0629 \u0625\u0646\u0647\u0627 \u0644\u0645 ت\u0642\u0635د \u0627\u0644\u0625\u0633\u0627\u0621\u0629 \u0645\u0637\u0644\u0642ً\u0627",
                "url": "http://akhbarak.net/articles/44851711-%D9%85%D9%8A%D8%A7%D8%B1-%D8%A7%D9%84%D8%A8%D8%A8%D9%84%D8%A7%D9%88%D9%8A-quot-%D8%A3%D8%AD%D9%85%D8%AF-%D8%B1%D8%B2%D9%82-%D9%82%D9%84%D8%A8%D9%87-%D8%A3%D8%B3%D9%88%D8%AF-%D8%B9%D8%B4%D8%A7%D9%86-%D9%85%D8%B4",
                "source": "Akhbarak.net",
                "image": "https://akhbarak.net/photos/articles-photos/2022/10/31/44851711/44851711-large.jpg?1667172145",
                "category": "general",
                "language": "ar",
                "country": "eg",
                "published_at": "2022-10-30T23:22:19+00:00"
              },
              {
                "author": "\u0625\u0639\u0644\u0627\u0645",
                "title": "\u0634\u0627\u0647د.. \u0631\u0627\u0645ي \u0639ي\u0627\u0634 \u0644\u0640\u0022\u0627\u0644حي\u0627\u0629\u0022: \u0647\u0646\u0627\u0643 \u0623\u0646\u0648\u0627\u0639 \u0645\u0646 \u0627\u0644\u0645\u0648\u0633ي\u0642\u0649 \u0645\u0648ج\u0629 \u0648ت\u0639دي - E3lam.Com",
                "description": "\u0623\u0643د \u0627\u0644\u0646ج\u0645 \u0631\u0627\u0645ي \u0639ي\u0627\u0634، \u0623\u0646 \u0645\u0647\u0631ج\u0627\u0646 \u0627\u0644\u0645\u0648\u0633ي\u0642\u0649 \u0627\u0644\u0639\u0631\u0628ي\u0629 \u0644ي\u0633 \u0633\u0647\u0644ً\u0627 \u0644\u0623\u0646\u0647 \u0639\u0631ي\u0642 \u0648\u0644\u0627 ي\u0634\u0628\u0647 \u0623ي ح\u0641\u0644 \u0623\u0648 \u0645\u0647\u0631ج\u0627\u0646 \u0622خ\u0631، \u0644\u0623\u0646 ج\u0645\u0647\u0648\u0631 \u0627\u0644\u0623\u0648\u0628\u0631\u0627 \u0647\u0645 \u0623\u0634خ\u0627\u0635 \u0644\u0627 ي\u0633\u0645ح\u0648",
                "url": "http://akhbarak.net/articles/44845180-%D8%B4%D8%A7%D9%87%D8%AF-%D8%B1%D8%A7%D9%85%D9%8A-%D8%B9%D9%8A%D8%A7%D8%B4-%D9%84%D9%80-quot-%D8%A7%D9%84%D8%AD%D9%8A%D8%A7%D8%A9-quot-%D9%87%D9%86%D8%A7%D9%83-%D8%A3%D9%86%D9%88%D8%A7%D8%B9-%D9%85%D9%86",
                "source": "Akhbarak.net",
                "image": "https://akhbarak.net/photos/articles-photos/2022/10/28/44845180/44845180-large.jpg?1666920536",
                "category": "general",
                "language": "ar",
                "country": "eg",
                "published_at": "2022-10-28T01:26:48+00:00"
              },
              {
                "author": "Monjed Jado",
                "title": "Palestinians observe general strike in Jerusalem-area village in mourning of Palestinian killed by Israel",
                "description": "Jerusalem/PNN/Palestinians in the town of al-Eizariya, east of the occupied city of Jerusalem, Monday observed a general strike in mourning of a Palestinian resident killed by Israeli forces yesterday in Jericho.All shops, schools and other institutions were closed in mourning of the Israeli killing of Barakat Moussa Odeh, 49.Odeh succumbed to the wounds he sustained from Israeli gunfire near the Nabi Moussa junction, south of Jericho.A few clips published on social media platforms document the moment Israeli soldiers shot Odeh at point-blank.Israeli forces claimed that Odeh rammed his car into...",
                "url": "https://english.pnn.ps/news/45628",
                "source": "english",
                "image": null,
                "category": "general",
                "language": "ar",
                "country": "ps",
                "published_at": "2022-10-31T10:16:00+00:00"
              },
              {
                "author": null,
                "title": "Code de la famille : Le CESE pour un débat «ouvert, pluraliste et responsable»",
                "description": "Le Conseil économique, social et environnemental (CESE) a appelé, jeudi à Rabat, à une révision du Code de la famille en accélérant le lancement dun débat public «ouvert, pluraliste et responsable» et dune réflexion collective fondée sur lavis des instances compétentes. Lors dun colloque national sur légalité et la justice au sein de la famille marocaine, jeudi à Rabat, le président du CESE, Ahmed Réda Chami a prôné aussi une «dynamique de réflexion collective fondée sur lavis dinstances compétentes autour de lensemble des questions liées notamment au mariage, au...",
                "url": "https://www.yabiladi.com/articles/details/133342/code-famille-cese-pour-debat.html",
                "source": "yabiladi.com",
                "image": "https://static.yabiladi.com/files/articles/31f708ee0da64d5f598799f0a608665f20221029113651150.jpg",
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-29T09:38:00+00:00"
              },
              {
                "author": null,
                "title": "Irlande : Le Marocain Taoufik Allam remporte le marathon de Dublin",
                "description": "Lathlète marocain Taoufik Allam a remporté, ce dimanche, le marathon de Dublin en un temps de 2:11:30, avec deux minutes davance sur lÉthiopien Ashenafi Boja (2:13:59), talonné par son compatriote Birhanu Teshome (2:14:26). «Je tiens à remercier les bénévoles et mon entraîneur. Je suis très heureux de gagner la course, je me suis beaucoup entraîné au Maroc», a confié l\u2019athlète, cité par le média irlandais Irish Examiner.",
                "url": "https://www.yabiladi.com/articles/details/133378/irlande-marocain-taoufik-allam-remporte.html",
                "source": "yabiladi.com",
                "image": "https://static.yabiladi.com/files/articles/5e21f96005ffea79fb401aaf07472c8720221030180253150.jpg",
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-30T17:20:00+00:00"
              },
              {
                "author": null,
                "title": "Emirats : Bencherki offre la victoire à Al Jazira (2-0) contre Al Wasl",
                "description": "Le Marocain Achraf Bencherki a inscrit un beau doublé pour offrir la victoire à son équipe dAl Jazira (2-0) sur Al Wasl dans un match comptant pour la 8e journée du championnat émirati de football (ADNOC Pro League), disputé samedi au stade Mohammed Bin Zayed de Abou Dhabi. Les deux réalisations de lancien wydadi ont été inscrites aux 21e et 41e minutes du jeu.",
                "url": "https://www.yabiladi.com/articles/details/133365/emirats-bencherki-offre-victoire-jazira.html",
                "source": "yabiladi.com",
                "image": "https://static.yabiladi.com/files/articles/6c43c01ce73182ca97c9546ec43d06d120221030125501150.jpg",
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-30T12:08:00+00:00"
              },
              {
                "author": null,
                "title": "\u0627\u0644\u0642\u0633\u0645 \u0627\u0644ث\u0627\u0646ي/ \u0026quot;\u0627\u0644\u0648\u0627\u0641\u0026quot; ي\u0647\u0632\u0645 \u0648د\u0627د ت\u0645\u0627\u0631\u0629 (2-1) \u0648\u0627\u0644ت\u0639\u0627د\u0644 يح\u0633\u0645 \u0645\u0648\u0627ج\u0647تي\u0652 \u0026quot;\u0627\u0644\u0631\u0651\u0627\u0643\u0026quot; \u0648\u0627\u0644\u0627ت\u0641\u0627\u0642 \u0627\u0644\u0645\u0631\u0627\u0643\u0634ي (0-0) \u0648\u0634. \u0628\u0646ج\u0631ي\u0631 \u0623\u0645\u0627\u0645 \u0633. \u0648\u0627د \u0632\u0645 (1-1)",
                "description": "\u0623ُج\u0631يت، \u0627\u0644ي\u0648\u0645 \u0627\u0644\u0633\u0628ت، ث\u0644\u0627ث \u0645\u0628\u0627\u0631ي\u0627ت \u0645\u0646 \u0627\u0644\u0628\u0637\u0648\u0644\u0629 \u0627\u0644\u0627حت\u0631\u0627\u0641ي\u0629 - \u0627\u0644\u0642\u0633\u0645 \u0627\u0644ث\u0627\u0646ي \u0022\u0625\u0646\u0648ي\u0022، \u0625\u0630 \u0627\u0633ت\u0642\u0628\u0644 \u0648د\u0627د ت\u0645\u0627\u0631\u0629 \u0646\u0638ي\u0631\u0647 \u0627\u0644\u0648د\u0627د \u0627\u0644\u0641\u0627\u0633ي، \u0648\u0627\u0644ت\u0642\u0649 \u0627\u0644\u0631\u0627\u0633ي\u0646غ \u0627\u0644\u0628ي\u0636\u0627\u0648ي \u0628\u0627\u0644\u0627ت\u0641\u0627\u0642 \u0627\u0644\u0645\u0631\u0627\u0643\u0634ي، \u0641ي\u0645\u0627 ت\u0642\u0627\u0628\u0644 \u0634\u0628\u0627\u0628 \u0628\u0646ج\u0631ي\u0631 \u0623\u0645\u0627\u0645 \u0633\u0631ي\u0639 \u0648\u0627",
                "url": "http://www.elbotola.com/article/2022-10-29-18-38-276.html",
                "source": "Elbotola.com",
                "image": null,
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-29T18:40:28+00:00"
              },
              {
                "author": null,
                "title": "Samir Jaouher remporte le 13ème Marathon international de Casablanca",
                "description": "Le Marocain Samir Jaouher a remporté, dimanche, le 13ème Marathon international de Casablanca, en signant un chrono de 2:12:27. Samir Jaouher a devancé ses deux compatriotes Mustapha Haddadi (2:13:13) et Omar Chitachen (2:15:10).",
                "url": "https://www.yabiladi.com/articles/details/133363/samir-jaouher-remporte-13eme-marathon.html",
                "source": "yabiladi.com",
                "image": "https://static.yabiladi.com/files/articles/75812d33c8b0b962fc688cb4cb53d81720221030124301150.jpg",
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-10-30T11:59:00+00:00"
              },
              {
                "author": null,
                "title": "\u0634\u0627\u0647د \u0644\u0642\u0637\u0629 \u0645ثي\u0631\u0629 \u0644\u0644جد\u0644 \u0644\u0640 \u0027\u0027\u0645ي\u0633ي\u0027\u0027 \u0644\u0645 ي\u0634\u0627\u0647د\u0647\u0627 \u0627\u0644\u0643ثي\u0631\u0648\u0646 \u0641ي \u0645\u0628\u0627\u0631\u0627\u0629 \u0027\u0027\u0627\u0644\u0623\u0631ج\u0646تي\u0646 \u0648\u0647\u0648\u0644\u0646د\u0627\u0027\u0027",
                "description": "\u0634\u0647دت \u0645\u0628\u0627\u0631\u0627\u0629 \u0627\u0644\u0623\u0631ج\u0646تي\u0646 \u0648\u0647\u0648\u0644\u0646د\u0627 \u0641ي \u0631\u0628\u0639 \u0646\u0647\u0627\u0626ي \u0645\u0648\u0646دي\u0627\u0644 \u0642\u0637\u0631 ت\u0648ت\u0631\u0627 \u0643\u0628ي\u0631\u0627 \u0623ث\u0646\u0627\u0621 \u0627\u0644\u0645\u0628\u0627\u0631\u0627\u0629 \u0648\u0628\u0639د\u0647\u0627، \u0648دخ\u0644 \u0627\u0644\u0646ج\u0645 \u0644ي\u0648\u0646ي\u0644 \u0645ي\u0633ي \u0641ي \u0645\u0634\u0627ح\u0646\u0627ت \u0639ديد\u0629 \u0645\u0639 \u0644\u0627\u0639\u0628ي \u0647\u0648\u0644\u0646د\u0627 \u0648\u0645\u0639 \u0627\u0644\u0645دي\u0631 \u0627\u0644\u0641\u0646ي \u0644\u0648ي\u0633 \u0641\u0627\u0646 غ\u0627\u0644.\u0644\u0643\u0646 \u0627\u0644\u0644\u0642\u0637\u0629 \u0627\u0644\u0623\u0643ث\u0631 \u0625ث\u0627\u0631\u0629 \u0644\u0644جد\u0644، \u0639\u0646د\u0645\u0627 \u0643\u0627\u0646 \u0645ي\u0633ي يج\u0631ي \u0645\u0642\u0627\u0628\u0644\u0629 \u0645\u0639 \u0642\u0646\u0627\u0629 \u0022تي \u0648\u0627ي \u0633ي\u0022 \u0648\u0641ج\u0623\u0629 \u0642\u0637\u0639 حديث\u0647 \u0648\u0628د\u0623 ي\u0648ج\u0647 \u0627\u0644\u0634ت\u0627\u0626\u0645 \u0644\u0623حد \u0627\u0644\u0644\u0627\u0639\u0628ي\u0646، \u0625\u0630 \u0642\u0627\u0644 \u0022\u0645\u0627 \u0627\u0644\u0630ي ت\u0646\u0638\u0631 \u0625\u0644ي\u0647، \u0627\u0630\u0647\u0628 \u0623ي\u0647\u0627 \u0627\u0644\u0623ح\u0645\u0642!\u0022.\u0627\u0646\u0642\u0631 \u0644\u0645\u0634\u0627\u0647د \u0627\u0644\u0641يدي\u0648 \u0627\u0644\u0645\u0631\u0627\u0633\u0644 \u0627\u0644\u0630ي \u0623ج\u0631\u0649 \u0627\u0644\u0645\u0642\u0627\u0628\u0644\u0629 \u0022ج\u0627\u0633ت\u0646 \u0625يد\u0648\u0644\u0022 \u0633\u0626\u0644 \u0639\u0646 \u0627...",
                "url": "https://marebpress.net/news_details.php?lang=arabic\u0026sid=189105",
                "source": "Mareb Press",
                "image": null,
                "category": "general",
                "language": "ar",
                "country": "ye",
                "published_at": "2022-12-10T12:07:35+00:00"
              },
              {
                "author": null,
                "title": "Armée de libération marocaine #5 : Les sources d\u2019armement",
                "description": "Se fournir en armement ne fut pas des tâches les plus aisées pour l\u2019armée de libération marocaine. En effet, ses cellules veillaient à tenir secrètes leurs actions, d\u2019autant plus que ses membres tentaient d\u2019obtenir le matériel nécessaire sans être soupçonnés de rouler pour les communistes et le bloc de l\u2019Est.",
                "url": "https://www.yabiladi.com/articles/details/72061/armee-liberation-marocaine-sources-d-armement.html",
                "source": "yabiladi.com",
                "image": "https://static.yabiladi.com/files/articles/37d53e9c517775084a6f7bfecfaa7bae20181211180329150.jpg",
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-12-12T07:00:00+00:00"
              },
              {
                "author": null,
                "title": "\u0639\u0637ي\u0629 \u0627\u0644\u0644\u0647 \u0644\u0640\u0026quot;\u0627\u0644\u0641ي\u0641\u0627\u0026quot;: \u0026quot;\u0646ح\u0646 \u0639\u0627\u0626\u0644\u0629 \u0648\u0627حد\u0629 \u0648\u0644\u0627 ي\u0645\u0643\u0646\u0646ي \u0623\u0635\u0641 \u0634\u0639\u0648\u0631ي \u0641ي \u0627\u0644\u0644ح\u0638\u0629 \u0627\u0644تي \u0639\u0644\u0645ت خ\u0644\u0627\u0644\u0647\u0627 \u0623\u0646\u0646ي \u0633\u0623\u0634\u0627\u0631\u0643 \u0623\u0633\u0627\u0633ي\u0627 \u0623\u0645\u0627\u0645 \u0627\u0644\u0628\u0631تغ\u0627\u0644\u0026quot;",
                "description": "\u0639\u0628\u0631 \u0627\u0644د\u0648\u0644ي \u0627\u0644\u0645غ\u0631\u0628ي يحي\u0649 \u0639\u0637ي\u0629 \u0627\u0644\u0644\u0647، \u0639\u0646 \u0633\u0639\u0627دت\u0647 \u0628\u0645\u0633\u0627\u0647\u0645ت\u0647 \u0641ي \u0635\u0646\u0627\u0639\u0629 \u0647د\u0641 \u0022\u0627\u0644\u0623\u0633\u0648د\u0022 \u0623\u0645\u0627\u0645 \u0627\u0644\u0645\u0646تخ\u0628 \u0627\u0644\u0628\u0631تغ\u0627\u0644ي، \u0641ي \u0627\u0644\u0645\u0628\u0627\u0631\u0627\u0629 \u0627\u0644ي ج\u0645\u0639ت \u0627\u0644\u0637\u0631\u0641ي\u0646 \u0644ح\u0633\u0627\u0628 \u0627\u0644د\u0648\u0631 \u0631\u0628\u0639 \u0627\u0644\u0646\u0647\u0627\u0626ي \u0644\u0643\u0623\u0633 \u0627\u0644\u0639\u0627\u0644\u0645 \u0022\u0642\u0637\u0631 2022\u0022.\u0648\u0642\u0627\u0644 \u0639\u0637ي\u0629 \u0627\u0644\u0644\u0647 \u0641ي ت\u0635\u0631يح",
                "url": "http://www.elbotola.com/article/2022-12-11-18-59-342.html",
                "source": "Elbotola.com",
                "image": null,
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-12-11T19:05:32+00:00"
              },
              {
                "author": null,
                "title": "Un otage allemand libéré au Mali grâce au Maroc",
                "description": "Les services de renseignements du Maroc ont contribué à la libération d\u2019un otage allemand au Mali, indiquent des médias allemands qui citent le Der Spiegel. Jörg Lange, 63 ans, un membre d\u2019une organisation humanitaire basée à Berlin, a retrouvé la liberté après quatre années de détention.",
                "url": "https://www.yabiladi.com/articles/details/134762/otage-allemand-libere-mali-grace.html",
                "source": "yabiladi.com",
                "image": "https://static.yabiladi.com/files/articles/eb5dd753fcb4848010e2bac65dc9b2c920221210165845150.jpg",
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-12-10T16:00:00+00:00"
              },
              {
                "author": null,
                "title": "غ\u0630\u0627\u0621 -ح\u0627\u0645ي\u0647\u0627 ح\u0631\u0627\u0645ي\u0647\u0627- \u0623\u0648 خد\u0639\u0629 -\u0627\u0644ث\u0648\u0631\u0629 \u0627\u0644خ\u0636\u0631\u0627\u0621- - \u0627\u0644\u0637\u0627\u0647\u0631 \u0627\u0644\u0645\u0639\u0632",
                "description": "#\u0627\u0644ح\u0648\u0627\u0631_\u0627\u0644\u0645ت\u0645د\u0646 #\u0627\u0644\u0637\u0627\u0647\u0631_\u0627\u0644\u0645\u0639\u0632 \u0628د\u0623ت \u0627\u0644\u0634\u0631\u0643\u0627ت \u0627\u0644\u0639\u0627\u0628\u0631\u0629 \u0644\u0644\u0642\u0627\u0631\u0627ت، \u0645\u0646\u0630 \u0633\u0646\u0629 1970 ت\u0642\u0631ي\u0628ً\u0627، تتحدث \u0639\u0646 \u0022\u0627\u0644ث\u0648\u0631\u0629 \u0627\u0644خ\u0636\u0631\u0627\u0621\u0022، \u0648\u0627\u0633تخد\u0645ت \u0647\u0630\u0627 \u0022\u0627\u0644\u0634\u0651\u0639\u0627\u0631 \u0627\u0644\u0646\u0651\u0628ي\u0644\u0022 \u0644\u0644\u0647ي\u0645\u0646\u0629 \u0639\u0644\u0649 \u0627\u0644\u0632\u0631\u0627\u0639\u0629 \u0641ي \u0627\u0644\u0628\u0644د\u0627\u0646 \u0627\u0644غ\u0646ي\u0629، ث\u0645 \u0628د\u0623ت \u0647\u0630\u0647 \u0627\u0644\u0634\u0631\u0643\u0627ت \u0645\u0646\u0630 \u0627\u0644\u0639\u0627\u0645 2000...",
                "url": "https://www.ssrcaw.org/ar/show.art.asp?aid=776928",
                "source": "Ahewar.org",
                "image": "https://www.ahewar.org/debat/images/fpage/art/8.jpg",
                "category": "general",
                "language": "ar",
                "country": "iq",
                "published_at": "2022-12-11T16:35:37+00:00"
              },
              {
                "author": null,
                "title": "\u0635حي\u0641\u0629 \u0026quot;\u0633\u0628\u0648\u0631ت\u0026quot; \u0628ح\u0633\u0631\u0629ٍ: \u0026quot;\u0628\u0631\u0634\u0644\u0648\u0646\u0629 \u0631\u0641\u0636 \u0636\u0645 \u0632ي\u0627\u0634 \u0642\u0628\u0644 \u0633\u0646\u0629 \u0648\u0627حد\u0629 \u0648\u0641\u0636\u0651\u0644 \u0639\u0644ي\u0647 \u0623د\u0627\u0645\u0627 ت\u0631\u0627\u0648\u0631ي \u0648\u0641ي\u0631\u0627\u0646 ت\u0648\u0631ي\u0633\u0026quot;",
                "description": "\u0643\u0634\u0641ت \u0635حي\u0641\u0629 \u0022\u0633\u0628\u0648\u0631ت\u0022 \u0627\u0644\u0625\u0633\u0628\u0627\u0646ي\u0629 \u0623\u0646 \u0646\u0627دي \u0628\u0631\u0634\u0644\u0648\u0646\u0629 \u0631\u0641\u0636 \u0627\u0644ت\u0639\u0627\u0642د \u0645\u0639 ح\u0643ي\u0645 \u0632ي\u0627\u0634، \u0646ج\u0645 \u0627\u0644\u0645\u0646تخ\u0628 \u0627\u0644\u0645غ\u0631\u0628ي، \u0641ي \u0627\u0644\u0645ي\u0631\u0643\u0627ت\u0648 \u0627\u0644\u0634ت\u0648ي \u0627\u0644\u0641\u0627\u0631\u0637، \u0645ُ\u0636ي\u0641\u0629ً \u0623\u0646 \u0635\u0627ح\u0628 \u0627\u0644\u064029 \u0633\u0646\u0629 \u0646\u0641\u0636 \u0639\u0646\u0647 غُ\u0628\u0627\u0631 \u0627\u0644ت\u0648\u0627\u0636\u0639 \u0648\u0642د\u0651\u0645 \u0645\u0633ت\u0648ي\u0627ت \u0645\u0645ي\u0632\u0629 \u0641ي \u0646\u0647\u0627\u0626ي\u0627ت \u0643",
                "url": "http://www.elbotola.com/article/2022-12-11-13-18-489.html",
                "source": "Elbotola.com",
                "image": null,
                "category": "general",
                "language": "ar",
                "country": "ma",
                "published_at": "2022-12-11T13:20:27+00:00"
              },
              {
                "author": null,
                "title": "\u0631ح\u0644\u0629 \u0627\u0644\u0625\u0646\u0633\u0627\u0646 \u0641ي \u0627\u0644\u0639\u0627\u0644\u0645 \u0627\u0644\u0645\u0627دي Journey of Man in Material World - (\u0627\u0644ج\u0632\u0621 \u0627\u0644خ\u0627\u0645\u0633) - \u0631\u0627\u0646د\u0627 \u0634\u0648\u0642\u0649 \u0627\u0644ح\u0645\u0627\u0645\u0635\u0649",
                "description": "#\u0627\u0644ح\u0648\u0627\u0631_\u0627\u0644\u0645ت\u0645د\u0646 #\u0631\u0627\u0646د\u0627_\u0634\u0648\u0642\u0649_\u0627\u0644ح\u0645\u0627\u0645\u0635\u0649 4- \u0627\u0644\u0645\u0624ث\u0631\u0627ت \u0648خ\u0627\u0631\u0637\u0629 \u0627\u0644\u0637\u0631ي\u0642 \u0644\u0635\u0646\u0639 \u0627\u0644\u0642\u0631\u0627\u0631: Influences and road map of decision-making\u2022 \u0627\u0644ت\u0623ثي\u0631\u0627ت \u0627\u0644ث\u0642\u0627\u0641ي\u0629 \u0641ي \u0635\u0646\u0639 \u0627\u0644\u0642\u0631\u0627\u0631 Cultural influences in decision-making...",
                "url": "https://www.ssrcaw.org/ar/show.art.asp?aid=776849",
                "source": "Ahewar.org",
                "image": "https://www.ahewar.org/search/pic/1935.jpg",
                "category": "general",
                "language": "ar",
                "country": "iq",
                "published_at": "2022-12-10T19:50:38+00:00"
              }
            ]
          }
    ));
};