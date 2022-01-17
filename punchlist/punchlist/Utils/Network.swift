//
//  Network.swift
//  punchlist
//
//  Created by Scott Key on 1/16/22.
//

import Foundation
import Apollo

class Network {
    static let shared = Network()

    private(set) lazy var apollo = ApolloClient(url: URL(string: "https://apollo-fullstack-tutorial.herokuapp.com")!)
}
