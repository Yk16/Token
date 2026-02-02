
import { type Chain } from 'viem';
import { mainnet, sepolia, arbitrum, arbitrumSepolia } from 'viem/chains';

export const superposition: Chain = {
    id: 55244,
    name: 'Superposition',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH',
    },
    rpcUrls: {
        default: { http: ['https://rpc.superposition.so'] },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://explorer.superposition.so' },
    },
};

export const superpositionTestnet: Chain = {
    id: 98985,
    name: 'Superposition Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'SPN',
        symbol: 'SPN',
    },
    rpcUrls: {
        default: { http: ['https://testnet-rpc.superposition.so'] },
    },
    blockExplorers: {
        default: { name: 'Explorer', url: 'https://testnet-explorer.superposition.so' },
    },
    testnet: true,
};

// Default supported chains
export const chains = [arbitrum, arbitrumSepolia, mainnet, sepolia, superposition, superpositionTestnet] as const;