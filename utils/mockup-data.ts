/**
 * * Mockup data
 */

import { BetSlipDataType, ChallengeData } from "@/components/sports";

export const CATEGORIES = [
  { image: require("@assets/images/categories/c_NBA.png"), title: "NBA" },
  { image: require("@assets/images/categories/c_CBB_M.png"), title: "CBB (M)" },
  {
    image: require("@assets/images/categories/c_AUSOPEN_M.png"),
    title: "AUS OPEN (M)",
  },
  { image: require("@assets/images/categories/c_CFB.png"), title: "CFB" },
  {
    image: require("@assets/images/categories/c_AUSOPEN_M.png"),
    title: "AUS OPEN (M)",
  },
  { image: require("@assets/images/categories/c_NHL.png"), title: "NHL" },
];

export const MATCHES = [
  {
    image: require("@assets/images/matches/NBA.png"),
    title: "League or Tournament name",
    description: "Aldenaire vs Wardiere",
    timeLeft: "18 mins left",
  },
  {
    image: require("@assets/images/matches/NBA.png"),
    title: "League or Tournament name",
    description: "Aldenaire vs Wardiere",
    timeLeft: "18 mins left",
  },
  {
    image: require("@assets/images/matches/NBA.png"),
    title: "League or Tournament name",
    description: "Aldenaire vs Wardiere",
    timeLeft: "18 mins left",
  },
  {
    image: require("@assets/images/matches/NBA.png"),
    title: "League or Tournament name",
    description: "Aldenaire vs Wardiere",
    timeLeft: "18 mins left",
  },
  {
    image: require("@assets/images/matches/NBA.png"),
    title: "League or Tournament name",
    description: "Aldenaire vs Wardiere",
    timeLeft: "18 mins left",
  },
  {
    image: require("@assets/images/matches/NBA.png"),
    title: "League or Tournament name",
    description: "Aldenaire vs Wardiere",
    timeLeft: "18 mins left",
  },
];

export const TABLES: ChallengeData[] = [
  {
    A: {
      teamName: "Warriors",
      brand: require("@assets/images/teams/Warriors.png"),
      bettingData: [
        { label: "Moneyline", value1: -110 },
        { label: "Spread", value1: -110, value2: -3.5 },
        { label: "Total", value1: -110, value2: 234.5 },
      ],
    },
    B: {
      teamName: "Bucks",
      brand: require("@assets/images/teams/Bucks.png"),
      bettingData: [
        { label: "Moneyline", value1: +140 },
        { label: "Spread", value1: -110, value2: +3.5 },
        { label: "Total", value1: -110, value2: 234.5 },
      ],
    },
    visitors: [
      { username: "Michael", image: "@assets/images/avatars/Michael.png" },
      { username: "Jessica", image: "@assets/images/avatars/Jessica.png" },
      { username: "James", image: "@assets/images/avatars/James.png" },
      { username: "Emily" },
      { username: "John" },
    ],
  },
  {
    A: {
      teamName: "Hornets",
      brand: require("@assets/images/teams/Hornets.png"),
      bettingData: [
        { label: "Moneyline", value1: -110 },
        { label: "Spread", value1: -110, value2: -3.5 },
        { label: "Total", value1: -110, value2: 234.5 },
      ],
    },
    B: {
      teamName: "Kings",
      brand: require("@assets/images/teams/Kings.png"),
      bettingData: [
        { label: "Moneyline", value1: +140 },
        { label: "Spread", value1: -110, value2: +3.5 },
        { label: "Total", value1: -110, value2: 234.5 },
      ],
    },
    visitors: [
      { username: "Michael", image: "@assets/images/avatars/Michael.png" },
      { username: "Jessica", image: "@assets/images/avatars/Jessica.png" },
      { username: "James", image: "@assets/images/avatars/James.png" },
      { username: "Emily" },
      { username: "John" },
      { username: "John" },
      { username: "John" },
    ],
  },
  {
    A: {
      teamName: "Celtics",
      brand: require("@assets/images/teams/Celtics.png"),
      bettingData: [
        { label: "Moneyline", value1: -110 },
        { label: "Spread", value1: -110, value2: -3.5 },
        { label: "Total", value1: -110, value2: 234.5 },
      ],
    },
    B: {
      teamName: "Raptors",
      brand: require("@assets/images/teams/Raptors.png"),
      bettingData: [
        { label: "Moneyline", value1: +140 },
        { label: "Spread", value1: -110, value2: +3.5 },
        { label: "Total", value1: -110, value2: 234.5 },
      ],
    },
    visitors: [
      { username: "Michael", image: "@assets/images/avatars/Michael.png" },
      { username: "Jessica", image: "@assets/images/avatars/Jessica.png" },
      { username: "James", image: "@assets/images/avatars/James.png" },
      { username: "Emily" },
      { username: "John" },
      { username: "John" },
    ],
  },
  {
    A: {
      teamName: "Jazz",
      brand: require("@assets/images/teams/Jazz.png"),
      bettingData: [
        { label: "Moneyline", value1: -110 },
        { label: "Spread", value1: -110, value2: -3.5 },
        { label: "Total", value1: -110, value2: 234.5 },
      ],
    },
    B: {
      teamName: "Pelicans",
      brand: require("@assets/images/teams/Pelicans.png"),
      bettingData: [
        { label: "Moneyline", value1: +140 },
        { label: "Spread", value1: -110, value2: +3.5 },
        { label: "Total", value1: -110, value2: 234.5 },
      ],
    },
    visitors: [
      { username: "Michael", image: "@assets/images/avatars/Michael.png" },
      { username: "Jessica", image: "@assets/images/avatars/Jessica.png" },
      { username: "James", image: "@assets/images/avatars/James.png" },
      { username: "Emily" },
      { username: "John" },
      { username: "John" },
      { username: "John" },
      { username: "John" },
      { username: "John" },
    ],
  },
];

export const BET_DATA: BetSlipDataType[] = [
  {
    challengeTitle: "Warriors vs Bucks",
    teamName: "Warriors",
    brand: require("@assets/images/teams/Warriors.png"),
    value1: "-120",
    value2: "-3.5",
  },
  {
    challengeTitle: "Hornets vs Kings",
    teamName: "Kings",
    brand: require("@assets/images/teams/Kings.png"),
    value1: "+140",
    value2: "Moneyline",
  },
];
