//
//  AuthenticationViewModel.swift
//  punchlist
//
//  Created by Scott Key on 1/16/22.
//

import Foundation
import GoogleSignIn

enum SignInState {
    case signedIn
    case signedOut
}

class UserAuthModel: ObservableObject {
    @Published var state: SignInState = .signedOut
    @Published var token: String = ""

    init() {
        if GIDSignIn.sharedInstance.hasPreviousSignIn() {
            restoreSignIn()
        }
    }

    private func authenticateUser(for user: GIDGoogleUser?, with error: Error?) {
        guard error == nil else { return }
        guard let user = user else { return }

        user.authentication.do { authentication, error in
            guard error == nil else { return }
            guard let authentication = authentication else { return }
            guard let idToken = authentication.idToken else { return }
            self.token = idToken
        }
        state = .signedIn
    }

    func restoreSignIn() {
        GIDSignIn.sharedInstance.restorePreviousSignIn { [unowned self] user, error in
            authenticateUser(for: user, with: error)
        }
    }

    func signIn() {
        // 1
        if GIDSignIn.sharedInstance.hasPreviousSignIn() {
            restoreSignIn()

        } else {
            print("new sign in")
            let clientID = getPlistValue(plistName: "gSignIn", plistKey: "CLIENT_ID")

            // 3
            let configuration = GIDConfiguration(clientID: clientID)

            // 4
            guard let windowScene = UIApplication.shared.connectedScenes.first as? UIWindowScene else { return }
            guard let rootViewController = windowScene.windows.first?.rootViewController else { return }

            // 5
            GIDSignIn.sharedInstance.signIn(with: configuration, presenting: rootViewController) { [unowned self] user, error in
                authenticateUser(for: user, with: error)
            }
        }
    }

    func signOut() {
        GIDSignIn.sharedInstance.signOut()
        state = .signedOut
    }
}
