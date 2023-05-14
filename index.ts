enum TokenType {
    Keyword = "Keyword",
    Identifier = "Identifier",
    Operator = "Operator",
    Number = "Number",
    String = "String",
  }
  
  interface Token {
    type: TokenType;
    value: string;
  }
  
  class _ {
    private tokens: Token[];
  
    constructor(tokens: Token[]) {
      this.tokens = tokens;
    }
  
    public parse(): void {
      for (const token of this.tokens) {
        switch (token.type) {
          case TokenType.Identifier:
            this.parseIdentifierToken(token.value);
            break;
          case TokenType.Number:
            this.parseNumberToken(token.value);
            break;
          case TokenType.String:
            this.parseStringToken(token.value);
            break;
          case TokenType.Operator:
            this.parseOperatorToken(token.value);
            break;
          case TokenType.Keyword:
            this.parseKeywordToken(token.value);
            break;
          default:
            console.log("Unknown token:", token);
        }
      }
    }
  
    private parseIdentifierToken(identifier: string): void {
      console.log("Identifier:", identifier);
    }
  
    private parseNumberToken(number: string): void {
      console.log("Number:", number);
    }
  
    private parseStringToken(string: string): void {
      console.log("String:", string);
    }
  
    private parseOperatorToken(operator: string): void {
      console.log("Operator:", operator);
    }
  
    private parseKeywordToken(keyword: string): void {
      console.log("Keyword:", keyword);
    }
  }
  
  const tokens: Token[] = [
    { type: TokenType.Keyword, value: "local" },
    { type: TokenType.Identifier, value: "x" },
    { type: TokenType.Operator, value: "=" },
    { type: TokenType.Number, value: "42" },
    { type: TokenType.Keyword, value: "print" },
    { type: TokenType.String, value: "Hello, world!" },
  ];
  
  const parser = new _(tokens);
  parser.parse();
