import { Injectable } from '@angular/core';
import { Album } from 'src/data/Album';

@Injectable({
  providedIn: 'root',
})
export class AlbunsService {
  getAlbums(): Album[] {
    return [
      {
        title: 'Angels Cry',
        year: '1993',
        cover: 'assets/angels-cry.avif',
        tracks: [
          { title: 'Unfinished Allegro', iframeUrl: 'https://www.youtube.com/embed/TBegfRKsgtA?si=p5goeDf89iVtwEyg' },
          { title: 'Carry On', iframeUrl: 'https://www.youtube.com/embed/TBegfRKsgtA?si=p5goeDf89iVtwEyg' },
          { title: 'Time', iframeUrl: 'https://www.youtube.com/embed/Vr1eOOK-EZs?si=Cvep4z-wcAXlZM1l' },
          { title: 'Angels Cry', iframeUrl: 'https://www.youtube.com/embed/YrNoS0RPeeg?si=VF9SQbA1E1crUxwA' },
          { title: 'Stand Away', iframeUrl: 'https://www.youtube.com/embed/KYwTvl7xhFk?si=AnSARUd2qHSmMfsE' },
          { title: 'Never Understand', iframeUrl: 'https://www.youtube.com/embed/Lnu2Ko22UtA?si=SwYph2N1-cOO_K6c' },
          { title: 'Wuthering Heights', iframeUrl: 'https://www.youtube.com/embed/pN-pE31-7xk?si=4HtshxYEBNDQiAPc' },
          { title: 'Streets of Tomorrow', iframeUrl: 'https://www.youtube.com/embed/wyI-3fMQq6Q?si=-L_29ZM2dE-S3NAa' },
          { title: 'Evil Warning', iframeUrl: 'https://www.youtube.com/embed/rbsG6q2dEVU?si=2kN5Gf22yTK00IJE' },
          { title: 'Lasting Child', iframeUrl: 'https://www.youtube.com/embed/px8Ca6bYKh4?si=I0Ox5ghm9jxQXfP9' }
        ]
      },
      {
        title: 'Holy Land',
        year: '1996',
        cover: 'assets/holy-land.avif',
        tracks: [
          { title: 'Crossing', iframeUrl: 'https://www.youtube.com/embed/7dI4htfA5Qw?si=V8b2h9e3t1Kq' },
          { title: 'Nothing to Say', iframeUrl: 'https://www.youtube.com/embed/GcdFH6pAUPs?si=CETDfjXYuJlqj1xj' },
          { title: 'Silence and Distance', iframeUrl: 'https://www.youtube.com/embed/q6xMHroLqi4?si=JU2C2T3fESDq8k03' },
          { title: 'Carolina IV', iframeUrl: 'https://www.youtube.com/embed/eVHNVyVyPKU?si=WO1JHHXDSoBbSBRT' },
          { title: 'Holy Land', iframeUrl: 'https://www.youtube.com/embed/-bVZQwIm7Kk?si=4QXwt9YiSuR4ohWU' },
          { title: 'The Shaman', iframeUrl: 'https://www.youtube.com/embed/iaehX9nWJ0Q?si=Aqz8g9pUl35zVJv7' },
          { title: 'Make Believe', iframeUrl: 'https://www.youtube.com/embed/j1kNmgaIY7M?si=KPjyWyaz3iplFP6P' },
          { title: 'Z.I.T.O.', iframeUrl: 'https://www.youtube.com/embed/0zmgElzt_kw?si=3oe-OFT6Cr8yNhp0' },
          { title: 'Deep Blue', iframeUrl: 'https://www.youtube.com/embed/oGRfqF0Ck_8?si=BVJjqH2EBB3CIxZT' },
          { title: 'Lullaby for Lucifer', iframeUrl: 'https://www.youtube.com/embed/BU3_LUb2LbE?si=4BqDS9JKfraTuZgD' }
        ]
      },
      {
        title: 'Rebirth',
        year: '2001',
        cover: 'assets/rebirth.avif',
        tracks: [
          { title: 'In Excelsis', iframeUrl: 'https://www.youtube.com/embed/RLPNmD88f3E?si=R_sqHaviix6556q9' },
          { title: 'Nova Era', iframeUrl: 'https://www.youtube.com/embed/tDU-G4o0XV8?si=Mtvn719Kv_OOLDAg' },
          { title: 'Millennium Sun', iframeUrl: 'https://www.youtube.com/embed/w7x73ZN2IWw?si=Log5hYRU2fTq_L0i' },
          { title: 'Acid Rain', iframeUrl: 'https://www.youtube.com/embed/QKolvVB9lGE?si=S72Olpy1dR0ltxUJ' },
          { title: 'Heroes of Sand', iframeUrl: 'https://www.youtube.com/embed/kMxThvH-6Tw?si=YGDvBW0XOJ1988Ij' },
          { title: 'Unholy Wars: Part I – Imperial Crown / Part II – Forgiven Return', iframeUrl: 'https://www.youtube.com/embed/NBJPtRlgHYI?si=vRuenAkZYCgB024q' },
          { title: 'Rebirth', iframeUrl: 'https://www.youtube.com/embed/UEI32VzuzBI?si=KEXhCo_sO_3U7SSp' },
          { title: 'Judgement Day', iframeUrl: 'https://www.youtube.com/embed/oH8iUGQZAKM?si=1n0dQE0VuJMJbD_K' },
          { title: 'Running Alone', iframeUrl: 'https://www.youtube.com/embed/UNOkg6Ffzb0?si=Giqdv3e5obnPkFjp' },
          { title: 'Visions Prelude', iframeUrl: 'https://www.youtube.com/embed/ITsBxM3hvDY?si=ngUIdgAoBjnmyn6C' }
        ]
      },
      {
        title: 'Temple of Shadows',
        year: '2004',
        cover: 'assets/temple-of-shadows.avif',
        tracks: [
          { title: 'Deus Le Volt!', iframeUrl: 'https://www.youtube.com/embed/eQJv9xW9Bf8?si=YZiDsME3nzUdOous' },
          { title: 'Spread Your Fire', iframeUrl: 'https://www.youtube.com/embed/1kcvj1BW9p8?si=MO_TwyTGOaKFnipK' },
          { title: 'Angels and Demons', iframeUrl: 'https://www.youtube.com/embed/tk0kFrVaSSM?si=7JCbHuYbBIiAp_sV' },
          { title: 'Waiting Silence', iframeUrl: 'https://www.youtube.com/embed/9eNwZlvY04Y?si=P1gfOYJC6Q3taPdV' },
          { title: 'Wishing Well', iframeUrl: 'https://www.youtube.com/embed/u-zy_vIDefM?si=HogScGOKVRF1RyKe' },
          { title: 'The Temple of Hate', iframeUrl: 'https://www.youtube.com/embed/7SM-p6hlPK4?si=_VS30L9_y5o9ldx5' },
          { title: 'The Shadow Hunter', iframeUrl: 'https://www.youtube.com/embed/o1Dzqn7Nl80?si=KvsC_kf_QKp-QK2G' },
          { title: 'No Pain for the Dead', iframeUrl: 'https://www.youtube.com/embed/o1Dzqn7Nl80?si=KvsC_kf_QKp-QK2G' },
          { title: 'Winds of Destination', iframeUrl: 'https://www.youtube.com/embed/EEamaweDPJQ?si=jMBs-yGF3PDEcdKO' },
          { title: 'Sprouts of Time', iframeUrl: 'https://www.youtube.com/embed/EEamaweDPJQ?si=jMBs-yGF3PDEcdKO' },
          { title: 'Morning Star', iframeUrl: 'https://www.youtube.com/embed/EEamaweDPJQ?si=jMBs-yGF3PDEcdKO' },
          { title: 'Late Redemption', iframeUrl: 'https://www.youtube.com/embed/nsWmD66bUpg?si=0dVSTv2y53o6ahut' },
          { title: 'Gate XIII', iframeUrl: 'https://www.youtube.com/embed/o_XVycODotg?si=7j0drAtAVHBHiweG' }
        ]
      },
      {
        title: 'Aurora Consurgens',
        year: '2006',
        cover: 'assets/aurora-consurgens.avif',
        tracks: [
          { title: 'The Course of Nature', iframeUrl: 'https://www.youtube.com/embed/M8NX50ThcSo?si=58qWeNvo47MAqIro' },
          { title: 'The Voice Commanding You', iframeUrl: 'https://www.youtube.com/embed/7sxPCgPwOmc?si=TRfexr1VT3wyResc' },
          { title: 'Ego Painted Grey', iframeUrl: 'https://www.youtube.com/embed/b1ZEkVIbeS0?si=1ev85HzBVuUGReLf' },
          { title: 'Breaking Ties', iframeUrl: 'https://www.youtube.com/embed/O1Ca0BK8fZM?si=EmU_PmznmPkxjW4Q' },
          { title: 'Salvation: Suicide', iframeUrl: 'https://www.youtube.com/embed/j-bv5DApu_g?si=gwonOT-LbwSxLYXp' },
          { title: 'Window to Nowhere', iframeUrl: 'https://www.youtube.com/embed/aca47S_j-1k?si=GuayilDKcG0lgoI2' },
          { title: 'So Near, So Far', iframeUrl: 'https://www.youtube.com/embed/qgKxLOnwiXY?si=0MeTh85lHx1Jl1ci' },
          { title: 'Passing By', iframeUrl: 'https://www.youtube.com/embed/WNGdpPYa-5U?si=IDC_zH9DyCYSvjKX' },
          { title: 'Scream Your Heart Out', iframeUrl: 'https://www.youtube.com/embed/ztEKvbVe970?si=PR_eG8zIGBh5D2D8' },
          { title: 'Abandoned Fate', iframeUrl: 'https://www.youtube.com/embed/Vb_LeHfMNnc?si=yGLzz0m1mk9Mb8j5' }
        ]
      },
      {
        title: 'Aqua',
        year: '2010',
        cover: 'assets/aqua.avif',
        tracks: [
          { title: 'Viderunt Te Aquæ - Arising Thunder', iframeUrl: 'https://www.youtube.com/embed/dCAQ5kS0dOQ?si=Tjv85tOZDA9nkIqI' },
          { title: 'Awake from Darkness', iframeUrl: 'https://www.youtube.com/embed/6_sU5W5I3uA?si=HLWcWO2M_TwT2H1K' },
          { title: 'Lease of Life', iframeUrl: 'https://www.youtube.com/embed/fCAaefpY3Vk?si=7I6chkfN6QRm4zam' },
          { title: 'The Rage of the Waters', iframeUrl: 'https://www.youtube.com/embed/xXdeazI_bFM?si=_S6G_hQN-0_a0W77' },
          { title: 'Spirit of the Air', iframeUrl: 'https://www.youtube.com/embed/XV57OE4oBzc?si=zHIhI_mnMxX8AfGt' },
          { title: 'Hollow', iframeUrl: 'https://www.youtube.com/embed/tdKLl9rlKpo?si=0nq4PcjOCX68Qc8q' },
          { title: 'A Monster in Her Eyes', iframeUrl: 'https://www.youtube.com/embed/Q0TtQUG0Xz4?si=9bcByWITnpHfk3Z-' },
          { title: 'Weakness of a Man', iframeUrl: 'https://www.youtube.com/embed/OtoMkb8capk?si=GGs2pE6-9f6rVIX5' },
          { title: 'Ashes', iframeUrl: 'https://www.youtube.com/embed/_lAhp_o9ayU?si=zZmzasyQ63XHr4OZ' }
        ]
      },
      {
        title: 'Secret Garden',
        year: '2014',
        cover: 'assets/secret-garden.avif',
        tracks: [
          { title: 'Newborn Me', iframeUrl: 'https://www.youtube.com/embed/efHi0foDhYw?si=JYW8-x3L0MklJaMK' },
          { title: 'Black Hearted Soul', iframeUrl: 'https://www.youtube.com/embed/pi_MRcXvF2o?si=zEBhv6I_oNHM72z9' },
          { title: 'Final Light', iframeUrl: 'https://www.youtube.com/embed/caDXkne2jVc?si=GUm-wNr2XfpVjd5o' },
          { title: 'Storm of Emotions', iframeUrl: 'https://www.youtube.com/embed/uiRBpd-RkMY?si=Ee2DmJEKYTBbd_U5' },
          { title: 'Violet Sky', iframeUrl: 'https://www.youtube.com/embed/X3SHwWc4_0Q?si=-rSnbfRewN5d5GAa' },
          { title: 'Secret Garden', iframeUrl: 'https://www.youtube.com/embed/XUgG3Cdmqs4?si=0R1fz0lDkaCCwecW' },
          { title: 'Upper Levels', iframeUrl: 'https://www.youtube.com/embed/Bkyb9Nh34z8?si=5NLwJQ-nVM0z9u_B' },
          { title: 'Crushing Room', iframeUrl: 'https://www.youtube.com/embed/VI9OfPsIpgE?si=PMRY9IAZJlf2hd70' },
          { title: 'Perfect Symmetry', iframeUrl: 'https://www.youtube.com/embed/W6mOek--L68?si=vkQLJfH4lpcn2P1-' },
          { title: 'Silent Call', iframeUrl: 'https://www.youtube.com/embed/w_EiZ9ymRm8?si=W-mw0uV7vfvMZFc_' }
        ]
      },
      {
        title: 'Ømni',
        year: '2018',
        cover: 'assets/omni.avif',
        tracks: [
          { title: 'Light of Transcendence', iframeUrl: 'https://www.youtube.com/embed/vNUCsCoBkWw?si=4KoWSOYMwnL2Fk8x' },
          { title: 'Travelers of Time', iframeUrl: 'https://www.youtube.com/embed/nrPGDppY_ko?si=lAGhjHp-sy6E_TEl' },
          { title: "Black Widow's Web", iframeUrl: 'https://www.youtube.com/embed/dFWK3QNcg4k?si=9fkxW97vMcRnQDpb' },
          { title: 'Insania', iframeUrl: 'https://www.youtube.com/embed/woFJ7Vuo0VY?si=EVGQJ7zvTVdoynLc' },
          { title: 'The Bottom of My Soul', iframeUrl: 'https://www.youtube.com/embed/69XCiEHNiZs?si=RDvPnOAnoUZBxVGi' },
          { title: 'War Horns', iframeUrl: 'https://www.youtube.com/embed/4fxoOFxxtQ8?si=7O_pk91wGEUoGd0Z' },
          { title: 'Caveman', iframeUrl: 'https://www.youtube.com/embed/gl7x4j1t8AM?si=4hbkzSRwkKDyOlf6' },
          { title: 'Magic Mirror', iframeUrl: 'https://www.youtube.com/embed/eqOCo4EVVB8?si=tDdnLP6xX40BZvCA' },
          { title: 'Always More', iframeUrl: 'https://www.youtube.com/embed/6zj0UKJznB4?si=aNjGqXg284LNpsVZ' },
          { title: 'Omni – Silence Inside', iframeUrl: 'https://www.youtube.com/embed/inMPAO9HocA?si=sjJ9CnhZS-IFhpVo' },
          { title: 'Omni – Infinite Nothing', iframeUrl: 'https://www.youtube.com/embed/ypQm_i3jEeI?si=GDS4x9M3LYirNkkl' }
        ]
      },
      {
        title: 'Cycles of Pain',
        year: '2023',
        cover: 'assets/cycles-of-pain.avif',
        tracks: [
          { title: 'Cyclus Doloris', iframeUrl: 'https://www.youtube.com/embed/41Saj7eXJ5g?si=mcNonID1koafHlNv' },
          { title: 'Ride Into the Storm', iframeUrl: 'https://www.youtube.com/embed/D_43MvJ_diA?si=ZyW0DXjGt3nIt-tg' },
          { title: 'Dead Man on Display', iframeUrl: 'https://www.youtube.com/embed/7JbYiiTYlpI?si=XvRie7I46U9vmtj1' },
          { title: 'Tide of Changes – Part I', iframeUrl: 'https://www.youtube.com/embed/EfrDjwSqWOk?si=JgVkjZ63riGXJJr5' },
          { title: 'Tide of Changes – Part II', iframeUrl: 'https://www.youtube.com/embed/lDgMqeh-yHU?si=vHYfPgw01jmmkPws' },
          { title: 'Vida Seca', iframeUrl: 'https://www.youtube.com/embed/RXiufqQUtFA?si=i3R-NUw6lxkAI0lN' },
          { title: 'Gods of the World', iframeUrl: 'https://www.youtube.com/embed/sAb-iuImO0s?si=vJpqXaj8noQesBgO' },
          { title: 'Cycles of Pain', iframeUrl: 'https://www.youtube.com/embed/r40WbjOQUes?si=1weJjRj26W2VghFV' },
          { title: 'Faithless Sanctuary', iframeUrl: 'https://www.youtube.com/embed/gJZeWEJXuS0?si=SHZoNU9BPx1A1vzM' },
          { title: 'Here in the Now', iframeUrl: 'https://www.youtube.com/embed/5wVA8BK8aow?si=2cKNQvWhdRnAKgQQ' },
          { title: 'Generation Warriors', iframeUrl: 'https://www.youtube.com/embed/V-v1ffchHrI?si=KKpH05tID8Kyv2Iu' },
          { title: 'Tears of Blood', iframeUrl: 'https://www.youtube.com/embed/eaJ68a_Bdd4?si=ipSXb9KAoaOz7HP3' }
        ]
      }
    ];
  }
}
