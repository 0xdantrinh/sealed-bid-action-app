/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  SealedBidAuction,
  SealedBidAuctionInterface,
} from "../../contracts/SealedBidAuction";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minBid",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "AuctionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "winner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "winningBid",
        type: "uint256",
      },
    ],
    name: "AuctionEnded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
    ],
    name: "BidCommitted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "BidRevealed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "auctionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctions",
    outputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "minBid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        internalType: "bool",
        name: "biddingEnded",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "ended",
        type: "bool",
      },
      {
        internalType: "address",
        name: "highestBidder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "highestBid",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "commitBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "minBid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "createAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "endAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "endBidding",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionBidders",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bidAmount",
        type: "uint256",
      },
    ],
    name: "revealBid",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b503380603557604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b603c816041565b506091565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611174806100a06000396000f3fe60806040526004361061009c5760003560e01c80637a935370116100645780637a935370146101565780638da5cb5b14610176578063b9a2de3a1461019e578063df276469146101be578063e44d774d146101eb578063f2fde38b146101fe57600080fd5b8063093755ad146100a15780632ad71573146100c3578063571a26a0146100ec57806361e2db5514610121578063715018a614610141575b600080fd5b3480156100ad57600080fd5b506100c16100bc366004610cce565b61021e565b005b3480156100cf57600080fd5b506100d960015481565b6040519081526020015b60405180910390f35b3480156100f857600080fd5b5061010c610107366004610cce565b61032f565b6040516100e399989796959493929190610d2d565b34801561012d57600080fd5b506100c161013c366004610e40565b61049e565b34801561014d57600080fd5b506100c1610550565b34801561016257600080fd5b506100c1610171366004610eb9565b610564565b34801561018257600080fd5b506000546040516001600160a01b0390911681526020016100e3565b3480156101aa57600080fd5b506100c16101b9366004610cce565b61072c565b3480156101ca57600080fd5b506101de6101d9366004610cce565b610903565b6040516100e39190610edb565b6100c16101f9366004610eb9565b610972565b34801561020a57600080fd5b506100c1610219366004610f27565b610b01565b600081815260026020526040902060030154819042106102595760405162461bcd60e51b815260040161025090610f57565b60405180910390fd5b60008281526002602052604090206004810154600160a01b900460ff16156102bb5760405162461bcd60e51b8152602060048201526015602482015274109a59191a5b99c8185b1c9958591e48195b991959605a1b6044820152606401610250565b60048101546001600160a01b031633146103175760405162461bcd60e51b815260206004820152601b60248201527f4f6e6c792073656c6c65722063616e20656e642062696464696e6700000000006044820152606401610250565b600401805460ff60a01b1916600160a01b1790555050565b60026020526000908152604090208054819061034a90610f82565b80601f016020809104026020016040519081016040528092919081815260200182805461037690610f82565b80156103c35780601f10610398576101008083540402835291602001916103c3565b820191906000526020600020905b8154815290600101906020018083116103a657829003601f168201915b5050505050908060010180546103d890610f82565b80601f016020809104026020016040519081016040528092919081815260200182805461040490610f82565b80156104515780601f1061042657610100808354040283529160200191610451565b820191906000526020600020905b81548152906001019060200180831161043457829003601f168201915b5050506002840154600385015460048601546005870154600690970154959692959194506001600160a01b03808216945060ff600160a01b8304811694600160a81b909304169291169089565b60018054600091826104af83610fd2565b909155506000818152600260205260409020909150806104cf878261103a565b50600181016104de868261103a565b50600281018490556104f083426110f9565b600382018190556004820180546001600160a01b031916331790556040517f5bf34ed94988e5dcdc7d1faaa54eb1d3b55f45d5f11457e235afb21a8ebbe73c916105409185918a91899190611112565b60405180910390a1505050505050565b610558610b3f565b6105626000610b6c565b565b600082815260026020908152604080832033845260078101909252909120546105c25760405162461bcd60e51b815260206004820152601060248201526f139bc8189a59081d1bc81c995d99585b60821b6044820152606401610250565b6004810154600160a01b900460ff1661061d5760405162461bcd60e51b815260206004820152601d60248201527f41756374696f6e2042696464696e6720686173206e6f7420656e6465640000006044820152606401610250565b6004810154600160a81b900460ff16156106495760405162461bcd60e51b815260040161025090610f57565b3360008181526007830160205260409020549061066890859085610bbc565b146106aa5760405162461bcd60e51b8152602060048201526012602482015271125b9d985b1a5908189a59081c995d99585b60721b6044820152606401610250565b336000908152600882016020526040902082905560068101548211156106e6576005810180546001600160a01b03191633179055600681018290555b604080518481523360208201529081018390527f86d2fbc9069d34216ebc65b38ce840528d3f8cac0c86d2aaa7ab6a9db8bc35d3906060015b60405180910390a1505050565b600081815260026020526040902060030154819042101561078f5760405162461bcd60e51b815260206004820152601760248201527f41756374696f6e206973207374696c6c206163746976650000000000000000006044820152606401610250565b60008281526002602052604090206004810154600160a01b900460ff166107f05760405162461bcd60e51b8152602060048201526015602482015274109a59191a5b99c81a185cc81b9bdd08195b991959605a1b6044820152606401610250565b6004810154600160a81b900460ff16156108445760405162461bcd60e51b8152602060048201526015602482015274105d58dd1a5bdb88185b1c9958591e48195b991959605a1b6044820152606401610250565b60048101546001600160a01b031633146108a05760405162461bcd60e51b815260206004820152601b60248201527f4f6e6c792073656c6c65722063616e20656e642061756374696f6e00000000006044820152606401610250565b60048101805460ff60a81b1916600160a81b17905560058101546006820154604080518681526001600160a01b0390931660208401528201527fd2aa34a4fdbbc6dff6a3e56f46e0f3ae2a31d7785ff3487aa5c95c642acea5019060600161071f565b60008181526002602090815260409182902060090180548351818402810184019094528084526060939283018282801561096657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610948575b50505050509050919050565b600082815260026020526040902060030154829042106109a45760405162461bcd60e51b815260040161025090610f57565b600083815260026020819052604090912090810154831015610a085760405162461bcd60e51b815260206004820152601b60248201527f4269642069732062656c6f77206d696e696d756d20616d6f756e7400000000006044820152606401610250565b42816003015411610a2b5760405162461bcd60e51b815260040161025090610f57565b6004810154600160a01b900460ff1615610a7b5760405162461bcd60e51b8152602060048201526011602482015270109a59191a5b99c81a185cc8195b991959607a1b6044820152606401610250565b610a86843385610bbc565b3360008181526007840160209081526040808320949094556009850180546001810182559083529181902090910180546001600160a01b031916831790558251878152908101919091527f0934ea4de468dcd0d9a335c5f97aa77955310c29631c93fbd01d95a00242ec41910160405180910390a150505050565b610b09610b3f565b6001600160a01b038116610b3357604051631e4fbdf760e01b815260006004820152602401610250565b610b3c81610b6c565b50565b6000546001600160a01b031633146105625760405163118cdaa760e01b8152336004820152602401610250565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600083815260026020526040812082610c215760405162461bcd60e51b815260206004820152602160248201527f42696420616d6f756e74206d7573742062652067726561746572207468616e206044820152600360fc1b6064820152608401610250565b80600201548311610c885760405162461bcd60e51b815260206004820152602b60248201527f42696420616d6f756e74206d7573742062652067726561746572207468616e2060448201526a1b5a5b9a5b5d5b48189a5960aa1b6064820152608401610250565b6040516bffffffffffffffffffffffff19606086901b16602082015260348101849052605401604051602081830303815290604052805190602001209150509392505050565b600060208284031215610ce057600080fd5b5035919050565b6000815180845260005b81811015610d0d57602081850181015186830182015201610cf1565b506000602082860101526020601f19601f83011685010191505092915050565b61012081526000610d4261012083018c610ce7565b8281036020840152610d54818c610ce7565b604084019a909a52505060608101969096526001600160a01b03948516608087015292151560a086015290151560c085015290911660e08301526101009091015292915050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610dc257600080fd5b813567ffffffffffffffff811115610ddc57610ddc610d9b565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610e0b57610e0b610d9b565b604052818152838201602001851015610e2357600080fd5b816020850160208301376000918101602001919091529392505050565b60008060008060808587031215610e5657600080fd5b843567ffffffffffffffff811115610e6d57600080fd5b610e7987828801610db1565b945050602085013567ffffffffffffffff811115610e9657600080fd5b610ea287828801610db1565b949794965050505060408301359260600135919050565b60008060408385031215610ecc57600080fd5b50508035926020909101359150565b602080825282518282018190526000918401906040840190835b81811015610f1c5783516001600160a01b0316835260209384019390920191600101610ef5565b509095945050505050565b600060208284031215610f3957600080fd5b81356001600160a01b0381168114610f5057600080fd5b9392505050565b602080825260119082015270105d58dd1a5bdb881a185cc8195b991959607a1b604082015260600190565b600181811c90821680610f9657607f821691505b602082108103610fb657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600060018201610fe457610fe4610fbc565b5060010190565b601f82111561103557806000526020600020601f840160051c810160208510156110125750805b601f840160051c820191505b81811015611032576000815560010161101e565b50505b505050565b815167ffffffffffffffff81111561105457611054610d9b565b611068816110628454610f82565b84610feb565b6020601f82116001811461109c57600083156110845750848201515b600019600385901b1c1916600184901b178455611032565b600084815260208120601f198516915b828110156110cc57878501518255602094850194600190920191016110ac565b50848210156110ea5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b8082018082111561110c5761110c610fbc565b92915050565b84815260806020820152600061112b6080830186610ce7565b604083019490945250606001529291505056fea264697066735822122011656437ebdbb636cba6ade1c401b2e0644b8f333992e7860d28edeebc6677fc64736f6c634300081a0033";

type SealedBidAuctionConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SealedBidAuctionConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SealedBidAuction__factory extends ContractFactory {
  constructor(...args: SealedBidAuctionConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SealedBidAuction & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SealedBidAuction__factory {
    return super.connect(runner) as SealedBidAuction__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SealedBidAuctionInterface {
    return new Interface(_abi) as SealedBidAuctionInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SealedBidAuction {
    return new Contract(address, _abi, runner) as unknown as SealedBidAuction;
  }
}
