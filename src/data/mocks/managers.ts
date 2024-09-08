import { ACCESS_LEVELS } from "../../enums/AccessLevels";
export const mockDataManagers = [
  {
    id: 1,
    uuid: '3631d3de-197c-4393-ac4c-d418f7cb9e5f',
    name: 'test.user1',
    displayName: 'Test User I',
    discord: 'discord1',
    level: ACCESS_LEVELS.OWNER,
  },
  {
    id: 2,
    uuid: 'bbfb11b7-230c-4dcb-92c8-47226970a9e8',
    name: 'test.user2',
    displayName: 'Test User II',
    discord: 'discord2',
    level: ACCESS_LEVELS.SCRIPTER,
  },
  {
    id: 3,
    uuid: 'e7f1c813-e0be-4856-8eb3-2754eceea2c3',
    name: 'test.user3',
    displayName: 'Test User III',
    discord: 'discord3',
    level: ACCESS_LEVELS.MANAGER,
  },
  {
    id: 4,
    uuid: 'a0bfe130-d332-4d26-8451-f901d6a144b0',
    name: 'test.user4',
    displayName: 'Test User IV',
    discord: 'discord4',
    level: ACCESS_LEVELS.CSR,
  },
  {
    id: 5,
    uuid: 'f9603e41-6824-43f5-bd5d-63d8e2f04643',
    name: 'test.user5',
    displayName: 'Test User V',
    discord: 'discord5',
    level: ACCESS_LEVELS.OWNER,
  },
];