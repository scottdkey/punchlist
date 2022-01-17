//
//  punchlistApp.swift
//  punchlist
//
//  Created by Scott Key on 1/3/22.
//

import Firebase
import SwiftUI

@main
struct punchlistApp: App {
    @StateObject var auth = UserAuthModel()

    init() {
        FirebaseApp.configure()
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(auth)
        }
    }
}
