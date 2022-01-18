//
//  punchlistApp.swift
//  punchlist
//
//  Created by Scott Key on 1/3/22.
//

import SwiftUI

@main
struct punchlistApp: App {
    init() {
        ApolloTest()
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}

extension punchlistApp {
    func ApolloTest() {
        Network.shared.apollo.fetch(query: HelloQuery()) { result in
            switch result {
            case .success(let graphQLResult):
                print("Success! Result: \(String(describing: graphQLResult.data?.hello))")
            case .failure(let error):
                print("Failure! Error: \(error)")
            }
        }
    }
}
