import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xE28dDB74F5158E98b8DDD160c0ccee3Fbfe9AA54'
);

export default instance;