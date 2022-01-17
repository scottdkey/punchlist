//
//  ContentView.swift
//  punchlist
//
//  Created by Scott Key on 1/3/22.
//

import SwiftUI

struct ContentView: View {
    @EnvironmentObject var auth: UserAuthModel
    var body: some View {
        switch auth.state {
            case .signedIn: HomeView()
            case .signedOut: LoginView()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        Group {
            ContentView()
        }
    }
}
