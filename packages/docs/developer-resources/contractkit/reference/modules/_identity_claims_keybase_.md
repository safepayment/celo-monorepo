# External module: "identity/claims/keybase"

## Index

### Type aliases

* [KeybaseClaim](_identity_claims_keybase_.md#keybaseclaim)

### Variables

* [KeybaseClaimType](_identity_claims_keybase_.md#const-keybaseclaimtype)
* [keybaseFilePathToProof](_identity_claims_keybase_.md#const-keybasefilepathtoproof)

### Functions

* [createKeybaseClaim](_identity_claims_keybase_.md#const-createkeybaseclaim)
* [proofFileName](_identity_claims_keybase_.md#const-prooffilename)
* [targetURL](_identity_claims_keybase_.md#const-targeturl)
* [verifyKeybaseClaim](_identity_claims_keybase_.md#verifykeybaseclaim)

## Type aliases

###  KeybaseClaim

Ƭ **KeybaseClaim**: *t.TypeOf‹typeof KeybaseClaimType›*

Defined in packages/contractkit/src/identity/claims/keybase.ts:14

## Variables

### `Const` KeybaseClaimType

• **KeybaseClaimType**: *TypeC‹object›* = t.type({
  type: t.literal(ClaimTypes.KEYBASE),
  timestamp: TimestampType,
  // TODO: Validate compliant username before just interpolating
  username: t.string,
})

Defined in packages/contractkit/src/identity/claims/keybase.ts:8

___

### `Const` keybaseFilePathToProof

• **keybaseFilePathToProof**: *".well-known/celo/"* = `.well-known/celo/`

Defined in packages/contractkit/src/identity/claims/keybase.ts:16

## Functions

### `Const` createKeybaseClaim

▸ **createKeybaseClaim**(`username`: string): *[KeybaseClaim](_identity_claims_keybase_.md#keybaseclaim)*

Defined in packages/contractkit/src/identity/claims/keybase.ts:67

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |

**Returns:** *[KeybaseClaim](_identity_claims_keybase_.md#keybaseclaim)*

___

### `Const` proofFileName

▸ **proofFileName**(`address`: [Address](_base_.md#address)): *string*

Defined in packages/contractkit/src/identity/claims/keybase.ts:17

**Parameters:**

Name | Type |
------ | ------ |
`address` | [Address](_base_.md#address) |

**Returns:** *string*

___

### `Const` targetURL

▸ **targetURL**(`username`: string, `address`: [Address](_base_.md#address)): *string*

Defined in packages/contractkit/src/identity/claims/keybase.ts:18

**Parameters:**

Name | Type |
------ | ------ |
`username` | string |
`address` | [Address](_base_.md#address) |

**Returns:** *string*

___

###  verifyKeybaseClaim

▸ **verifyKeybaseClaim**(`claim`: [KeybaseClaim](_identity_claims_keybase_.md#keybaseclaim), `signer`: [Address](_base_.md#address)): *Promise‹string | undefined›*

Defined in packages/contractkit/src/identity/claims/keybase.ts:23

**Parameters:**

Name | Type |
------ | ------ |
`claim` | [KeybaseClaim](_identity_claims_keybase_.md#keybaseclaim) |
`signer` | [Address](_base_.md#address) |

**Returns:** *Promise‹string | undefined›*
