import { Network, Alchemy } from 'alchemy-sdk'

const settings = {
    apiKey: 'YOUR_API_KEY', 
    network: Network.ETH_MAINNET,
  };
  
  const alchemy = new Alchemy(settings);

export default alchemy;
