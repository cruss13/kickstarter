import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x00410506E3D261D136F9C26fFec0c7C33AE3b98e'
);

export default instance;