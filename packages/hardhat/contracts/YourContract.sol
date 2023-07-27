//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

// Use openzeppelin to inherit battle-tested implementations (ERC20, ERC721, etc)
// import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * A smart contract that allows changing a state variable of the contract and tracking the changes
 * It also allows the owner to withdraw the Ether in the contract
 * @author BuidlGuidl
 */
contract YourContract {

	uint256 public totalBalance;

	// graph data structure
	Person[] nodes;
	// all transactions go here
	Edge[] edges;
	// beneficiaries
	mapping(string => string[]) beneficiaries;


	// the node
	struct Person {
		string name;
		// a person can be connected with any amount of people
	}

	// an edge will be created for each beneficiary and "given to them"
	struct Edge {
		string nameOfBuyer;
		string nameOfBeneficiary;
		uint256 amount;
	}

	function createPerson(string memory personName) public {
		Person memory newPerson;
		newPerson.name = personName;
		nodes.push(newPerson);
	}

	function createEdge(string memory nameOfBuyer, string memory nameOfBeneficiary, uint256 amount) public returns (Edge memory) {
		Edge memory newEdge;
		newEdge.nameOfBuyer = nameOfBuyer;
		newEdge.nameOfBeneficiary = nameOfBeneficiary;
		newEdge.amount = amount;
		return newEdge;
	}

	function chooseBeneficiaries(string memory purchaseName, string memory p1) public {
		beneficiaries[purchaseName] = [p1];
	}
	function chooseBeneficiaries(string memory purchaseName, string memory p1, string memory p2) public {
		beneficiaries[purchaseName] = [p1, p2];
	}
	function chooseBeneficiaries(string memory purchaseName, string memory p1, string memory p2, string memory p3) public {
		beneficiaries[purchaseName] = [p1, p2, p3];
	}
	function chooseBeneficiaries(string memory purchaseName, string memory p1, string memory p2, string memory p3, string memory p4) public {
		beneficiaries[purchaseName] = [p1, p2, p3, p4];
	}
	function chooseBeneficiaries(string memory purchaseName, string memory p1, string memory p2, string memory p3, string memory p4, string memory p5) public {
		beneficiaries[purchaseName] = [p1, p2, p3, p4, p5];
	}

	// this function needs to divide the amount and make edges for each person
	// we could also loop over the array and assign people balances according to their names
	function logPurchase(uint256 amount, string memory nameOfBuyer, string memory purchaseName) public {
		uint256 numOfPeople = beneficiaries[purchaseName].length;
		uint256 dividedCost = amount / numOfPeople;
		for (uint256 i = 0; i < numOfPeople; i++) {
			string memory person = beneficiaries[purchaseName][i];
			Edge memory newEdge = createEdge(nameOfBuyer, person, dividedCost);
			edges.push(newEdge);
		}
	}





}
