//
//  ContentView.swift
//  punchlist
//
//  Created by Scott Key on 1/3/22.
//

import SwiftUI

struct ContentView: View {
    @StateObject var auth = UserAuthModel()
    var body: some View {
        switch auth.state {
            case .signedIn: HomeView()
            .environmentObject(self.auth)
            case .signedOut: LoginView()
            .environmentObject(self.auth)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
            ContentView()
    }
}
