import React, { createContext, useState, useEffect } from 'react';
import { ethers } from 'ethers';
import VotingSystem from '../artifacts/contracts/VotingSystem.sol/VotingSystem.json';

export const Web3Context = createContext();

export function Web3Provider({ children }) {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
        const contract = new ethers.Contract(
          contractAddress,
          VotingSystem.abi,
          signer
        );
        
        setAccount(accounts[0]);
        setProvider(provider);
        setContract(contract);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <Web3Context.Provider value={{ account, contract, provider, connectWallet }}>
      {children}
    </Web3Context.Provider>
  );
}