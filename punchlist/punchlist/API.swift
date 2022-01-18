// @generated
//  This file was automatically generated and should not be edited.

import Apollo
import Foundation

public final class HelloQuery: GraphQLQuery {
  /// The raw GraphQL definition of this operation.
  public let operationDefinition: String =
    """
    query Hello {
      hello
    }
    """

  public let operationName: String = "Hello"

  public let operationIdentifier: String? = "c3480ac7c119a88553b36f3f0ff43583b7c01f3b399dfe074d84b7daad442e38"

  public init() {
  }

  public struct Data: GraphQLSelectionSet {
    public static let possibleTypes: [String] = ["Query"]

    public static var selections: [GraphQLSelection] {
      return [
        GraphQLField("hello", type: .nonNull(.scalar(String.self))),
      ]
    }

    public private(set) var resultMap: ResultMap

    public init(unsafeResultMap: ResultMap) {
      self.resultMap = unsafeResultMap
    }

    public init(hello: String) {
      self.init(unsafeResultMap: ["__typename": "Query", "hello": hello])
    }

    public var hello: String {
      get {
        return resultMap["hello"]! as! String
      }
      set {
        resultMap.updateValue(newValue, forKey: "hello")
      }
    }
  }
}
