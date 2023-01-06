// This file holds all events that the mobile app is going to
// track if the user has the MetaMetrics option ENABLED.
// In case that the MetaMetrics option is DISABLED, then none
// of these events should be tracked in any kind of service.

import { IMetaMetricsEvent } from './MetaMetrics.types';

const generateOpt = (
  name: EVENT_NAME,
  action?: ACTIONS,
  description?: DESCRIPTION,
): IMetaMetricsEvent => {
  if (action && description) {
    return { name, properties: { action, name: description } };
  }
  return { name };
};

const ONBOARDING_WIZARD_STEP_DESCRIPTION = {
  1: 'Welcome',
  2: 'Accounts',
  3: 'Account Name',
  4: 'Main Navigation',
  5: 'Browser',
  6: 'Search',
};

/**
 * V2 Analytics Tracking Events
 */
enum EVENT_NAME {
  // Error
  ERROR = 'Error occurred',

  // Approval
  APPROVAL_STARTED = 'Approval Started',
  APPROVAL_COMPLETED = 'Approval Completed',
  APPROVAL_CANCELLED = 'Approval Cancelled',
  APPROVAL_PERMISSION_UPDATED = 'Approval Permission Updated',

  // Fee changed
  GAS_FEE_CHANGED = 'Gas Fee Changed',
  GAS_ADVANCED_OPTIONS_CLICKED = 'Gas Advanced Options Clicked',

  // Dapp Transaction
  DAPP_TRANSACTION_STARTED = 'Dapp Transaction Started',
  DAPP_TRANSACTION_COMPLETED = 'Dapp Transaction Completed',
  DAPP_TRANSACTION_CANCELLED = 'Dapp Transaction Cancelled',
  CONTRACT_ADDRESS_COPIED = 'Contract Address Copied',
  CONTRACT_ADDRESS_NICKNAME = 'Contract Address Nickname',

  // Sign request
  SIGN_REQUEST_STARTED = 'Sign Request Started',
  SIGN_REQUEST_COMPLETED = 'Sign Request Completed',
  SIGN_REQUEST_CANCELLED = 'Sign Request Cancelled',

  // Connect request
  CONNECT_REQUEST_STARTED = 'Connect Request Started',
  CONNECT_REQUEST_COMPLETED = 'Connect Request Completed',
  CONNECT_REQUEST_CANCELLED = 'Connect Request Cancelled',

  // Wallet
  WALLET_OPENED = 'Wallet Opened',
  TOKEN_ADDED = 'Token Added',
  COLLECTIBLE_ADDED = 'Collectible Added',

  // Network
  NETWORK_SWITCHED = 'Network Switched',
  NETWORK_ADDED = 'Network Added',
  NETWORK_REQUESTED = 'Network Requested',
  NETWORK_REQUEST_REJECTED = 'Network Request Rejected',

  // Send transaction
  SEND_TRANSACTION_STARTED = 'Send Transaction Started',
  SEND_TRANSACTION_COMPLETED = 'Send Transaction Completed',

  // On-ramp [LEGACY]
  ONRAMP_OPENED = 'On-ramp Opened',
  ONRAMP_CLOSED = 'On-ramp Closed',
  ONRAMP_PURCHASE_EXITED = 'On-ramp Purchase Exited',
  ONRAMP_PURCHASE_STARTED = 'On-ramp Purchase Started',
  ONRAMP_PURCHASE_SUBMISSION_FAILED = 'On-ramp Submission Failed',
  ONRAMP_PURCHASE_SUBMITTED_LEGACY = 'On-ramp Purchase Submitted',
  ONRAMP_PURCHASE_FAILED_LEGACY = 'On-ramp Purchase Failed',
  ONRAMP_PURCHASE_CANCELLED_LEGACY = 'On-ramp Purchase Cancelled',
  ONRAMP_PURCHASE_COMPLETED_LEGACY = 'On-ramp Purchase Completed',

  // Wallet Security
  WALLET_SECURITY_STARTED = 'Wallet Security Started',
  WALLET_SECURITY_MANUAL_BACKUP_INITIATED = 'Manual Backup Initiated',
  WALLET_SECURITY_PHRASE_REVEALED = 'Phrase Revealed',
  WALLET_SECURITY_PHRASE_CONFIRMED = 'Phrase Confirmed',
  WALLET_SECURITY_SKIP_INITIATED = 'Wallet Security Skip Initiated',
  WALLET_SECURITY_SKIP_CONFIRMED = 'Wallet Security Skip Confirmed',
  WALLET_SECURITY_RECOVERY_HINT_SAVED = 'Recovery Hint Saved',
  WALLET_SECURITY_COMPLETED = 'Wallet Security Completed',
  WALLET_SECURITY_PROTECT_VIEWED = 'Wallet Security Reminder Viewed',
  WALLET_SECURITY_PROTECT_ENGAGED = 'Wallet Security Reminder Engaged',
  WALLET_SECURITY_PROTECT_DISMISSED = 'Wallet Security Reminder Dismissed',

  // Analytics
  ANALYTICS_PREFERENCE_SELECTED = 'Analytics Preference Selected',
  ANALYTICS_REQUEST_DATA_DELETION = 'Delete MetaMetrics Data Request Submitted',

  // Onboarding
  ONBOARDING_WELCOME_MESSAGE_VIEWED = 'Welcome Message Viewed',
  ONBOARDING_WELCOME_SCREEN_ENGAGEMENT = 'Welcome Screen Engagement',
  ONBOARDING_STARTED = 'Onboarding Started',
  ONBOARDING_TOUR_STARTED = 'Onboarding Tour Started',
  ONBOARDING_TOUR_SKIPPED = 'Onboarding Tour Skipped',
  ONBOARDING_TOUR_STEP_COMPLETED = 'Onboarding Tour Step Completed',
  ONBOARDING_TOUR_STEP_REVISITED = 'Onboarding Tour Step Completed',
  ONBOARDING_TOUR_COMPLETED = 'Onboarding Tour Completed',
  ONBOARDING_COMPLETED = 'Onboarding Completed',

  // Wallet Setup
  WALLET_SETUP_STARTED = 'Wallet Setup Started',
  WALLET_IMPORT_STARTED = 'Wallet Import Started',
  WALLET_IMPORT_ATTEMPTED = 'Wallet Import Attempted',
  WALLET_IMPORTED = 'Wallet Imported',
  WALLET_SYNC_STARTED = 'Wallet Sync Started',
  WALLET_SYNC_ATTEMPTED = 'Wallet Sync Attempted',
  WALLET_SYNC_SUCCESSFUL = 'Wallet Sync Successful',
  WALLET_CREATION_ATTEMPTED = 'Wallet Creation Attempted',
  WALLET_CREATED = 'Wallet Created',
  WALLET_SETUP_FAILURE = 'Wallet Setup Failure',
  WALLET_SETUP_COMPLETED = 'Wallet Setup Completed',

  // Account
  SWITCHED_ACCOUNT = 'Switched Account',

  // Browser
  BROWSER_OPENED = 'Browser Opened',
  BROWSER_SEARCH_USED = 'Search Used',
  BROWSER_NEW_TAB = 'New Tab Opened',
  BROWSER_SWITCH_NETWORK = 'Switch Network',
  BROWSER_OPEN_ACCOUNT_SWITCH = 'Opened Account Switcher',
  BROWSER_NAVIGATION = 'Browser Menu Navigation Used',
  BROWSER_SHARE_SITE = 'Shared A Site',
  BROWSER_RELOAD = 'Reload Browser',
  BROWSER_ADD_FAVORITES = 'Added Site To Favorites',

  // Security & Privacy Settings
  VIEW_SECURITY_SETTINGS = 'Views Security & Privacy',

  // Reveal SRP
  REVEAL_SRP_CTA = 'Clicks Reveal Secret Recovery Phrase',
  REVEAL_SRP_SCREEN = 'Views Reveal Secret Recovery Phrase',
  GO_BACK_SRP_SCREEN = 'Clicked Back on Reveal SRP Password Page',
  CANCEL_REVEAL_SRP_CTA = 'Clicks Cancel on Reveal Secret Recovery Phrase Page',
  NEXT_REVEAL_SRP_CTA = 'Clicks Next on Reveal Secret Recovery Phrase',
  VIEW_SRP = 'Views SRP',
  SRP_DISMISS_HOLD_TO_REVEAL_DIALOG = 'Closes Hold To Reveal SRP',
  VIEW_SRP_QR = 'Views SRP QR code',
  COPY_SRP = 'Copies SRP to clipboard',
  SRP_DONE_CTA = 'Clicks Done with SRP',
  REVEAL_SRP_INITIATED = 'Reveal SRP Initiated',
  REVEAL_SRP_CANCELLED = 'Reveal SRP Cancelled',
  REVEAL_SRP_COMPLETED = 'Reveal SRP Completed',

  // Reveal Private Key
  REVEAL_PRIVATE_KEY_INITIATED = 'Reveal Private Key Initiated',
  REVEAL_PRIVATE_KEY_CANCELLED = 'Reveal Private Key Cancelled',
  REVEAL_PRIVATE_KEY_COMPLETED = 'Reveal Private Key Completed',

  // Key Management
  ANDROID_HARDWARE_KEYSTORE = 'Android Hardware Keystore',

  // QR Hardware Wallet
  CONNECT_HARDWARE_WALLET = 'Clicked Connect Hardware Wallet',
  CONTINUE_QR_HARDWARE_WALLET = 'Clicked Continue QR Hardware Wallet',
  CONNECT_HARDWARE_WALLET_SUCCESS = 'Connected Account with hardware wallet',
  QR_HARDWARE_TRANSACTION_CANCELED = 'User canceled QR hardware transaction',
  HARDWARE_WALLET_ERROR = 'Hardware wallet error',

  // Tokens
  TOKEN_DETECTED = 'Token Detected',
  TOKEN_IMPORT_CLICKED = 'Token Import Clicked',
  TOKEN_IMPORT_CANCELED = 'Token Import Canceled',
  TOKENS_HIDDEN = 'Tokens Hidden',

  // On Ramp Aggregator
  BUY_BUTTON_CLICKED = 'Buy Button Clicked',
  ONRAMP_REGION_SELECTED = 'On-ramp Region Selected',
  ONRAMP_PAYMENT_METHOD_SELECTED = 'On-ramp Payment Method Selected',
  ONRAMP_QUOTES_REQUESTED = 'On-ramp Quotes Requested',
  ONRAMP_CANCELED = 'On-ramp Canceled',
  ONRAMP_QUOTES_RECEIVED = 'On-ramp Quotes Received',
  ONRAMP_PROVIDER_SELECTED = 'On-ramp Provider Selected',
  ONRAMP_PROVIDER_DETAILS_VIEWED = 'On-ramp Provider Details Viewed',
  ONRAMP_DIRECT_PROVIDER_CLICKED = 'On-ramp Provider Custom Action Clicked',
  ONRAMP_PURCHASE_SUBMITTED = 'On-ramp Purchase Submitted',
  ONRAMP_PURCHASE_COMPLETED = 'On-ramp Purchase Completed',
  ONRAMP_PURCHASE_FAILED = 'On-ramp Purchase Failed',
  ONRAMP_PURCHASE_CANCELLED = 'On-ramp Purchase Cancelled',
  ONRAMP_PURCHASE_DETAILS_VIEWED = 'On-ramp Purchase Details Viewed',

  // On Ramp
  ONRAMP_EXTERNAL_LINK_CLICKED = 'External Link Clicked',
  ONRAMP_QUOTE_ERROR = 'On-ramp Quote Error',
  ONRAMP_ERROR = 'On-ramp Error',

  ACCOUNTS = 'Accounts',
  AUTH = 'Auth',
  BROWSER_VIEW = 'Browser View',
  COMMON_NAVIGATION = 'Common Navigation',
  DAPP_VIEW = 'Dapp View',
  NAVIGATION_DRAWER = 'Navigation Drawer',
  ONBOARDING = 'Onboarding',
  SETTINGS = 'Settings',
  TRANSACTIONS = 'Transactions',
  WALLET_VIEW = 'Wallet View',
  RECEIVE_OPTIONS = 'Receive Options',
  SEND_FLOW = 'Send Flow',
  DAPP_INTERACTIONS = 'Dapp Interactions',
  WALLET = 'Wallet',
  PAYMENTS = 'Payments',

  // Swaps
  SWAPS_OPENED = 'Swaps Opened',
  SWAP_TRACKING_FAILED = 'Swap Tracking Failed',
  QUOTES_REQUESTED = 'Quotes Requested',
  QUOTES_RECEIVED = 'Quotes Received',
  QUOTES_REQUEST_CANCELLED = 'Quotes Request Cancelled',
  ALL_AVAILABLE_QUOTES_OPENED = 'All Available Quotes Opened',
  SWAP_STARTED = 'Swap Started',
  SWAP_COMPLETED = 'Swap Completed',
  SWAP_FAILED = 'Swap Failed',
  QUOTES_TIMED_OUT = 'Quotes Timed Out',
  NO_QUOTES_AVAILABLE = 'No Quotes Available',
  GAS_FEES_CHANGED = 'Gas Fees Changed',
  EDIT_SPEND_LIMIT_OPENED = 'Edit Spend Limit Opened',
  TOKEN_IMPORTED = 'Custom Token Imported',

  // Force Upgrade | Automatic Security Checks
  FORCE_UPGRADE_UPDATE_NEEDED_PROMPT_VIEWED = 'Force Upgrade Update Needed Prompt Viewed',
  FORCE_UPGRADE_UPDATE_TO_THE_LATEST_VERSION_CLICKED = 'Force Upgrade Clicked Update to Latest Version',
  FORCE_UPGRADE_REMIND_ME_LATER_CLICKED = 'Force Upgrade Clicked Remind Me Later',
  AUTOMATIC_SECURITY_CHECKS_PROMPT_VIEWED = 'Automatic Security Checks Prompt Viewed',
  AUTOMATIC_SECURITY_CHECKS_ENABLED_FROM_PROMPT = 'Automatic Security Checks Enabled From Prompt',
  AUTOMATIC_SECURITY_CHECKS_DISABLED_FROM_PROMPT = 'Automatic Security Checks Disabled From Prompt',
  AUTOMATIC_SECURITY_CHECKS_ENABLED_FROM_SETTINGS = 'Automatic Security Checks Enabled From Settings',
  AUTOMATIC_SECURITY_CHECKS_DISABLED_FROM_SETTINGS = 'Automatic Security Checks Disabled From Settings',

  // Screenshots Deterrent
  SCREENSHOT_WARNING = 'Screenshot Warning Displayed',
  SCREENSHOT_LEARN_MORE = 'Clicked Screenshot Warning Learn More',
  SCREENSHOT_OK = 'Clicked Screenshot Warning OK',

  //Terms of Use
  USER_TERMS = 'Terms of Use',
}

const events = {
  ERROR: generateOpt(EVENT_NAME.ERROR),
  APPROVAL_STARTED: generateOpt(EVENT_NAME.APPROVAL_STARTED),
  APPROVAL_COMPLETED: generateOpt(EVENT_NAME.APPROVAL_COMPLETED),
  APPROVAL_CANCELLED: generateOpt(EVENT_NAME.APPROVAL_CANCELLED),
  APPROVAL_PERMISSION_UPDATED: generateOpt(
    EVENT_NAME.APPROVAL_PERMISSION_UPDATED,
  ),
  GAS_FEE_CHANGED: generateOpt(EVENT_NAME.GAS_FEES_CHANGED),
  GAS_ADVANCED_OPTIONS_CLICKED: generateOpt(
    EVENT_NAME.GAS_ADVANCED_OPTIONS_CLICKED,
  ),
  DAPP_TRANSACTION_STARTED: generateOpt(EVENT_NAME.DAPP_TRANSACTION_STARTED),
  DAPP_TRANSACTION_COMPLETED: generateOpt(
    EVENT_NAME.DAPP_TRANSACTION_COMPLETED,
  ),
  DAPP_TRANSACTION_CANCELLED: generateOpt(
    EVENT_NAME.DAPP_TRANSACTION_CANCELLED,
  ),
  CONTRACT_ADDRESS_COPIED: generateOpt(EVENT_NAME.CONTRACT_ADDRESS_COPIED),
  CONTRACT_ADDRESS_NICKNAME: generateOpt(EVENT_NAME.CONTRACT_ADDRESS_NICKNAME),
  SIGN_REQUEST_STARTED: generateOpt(EVENT_NAME.SIGN_REQUEST_STARTED),
  SIGN_REQUEST_COMPLETED: generateOpt(EVENT_NAME.SIGN_REQUEST_COMPLETED),
  SIGN_REQUEST_CANCELLED: generateOpt(EVENT_NAME.SIGN_REQUEST_CANCELLED),
  CONNECT_REQUEST_STARTED: generateOpt(EVENT_NAME.CONNECT_REQUEST_STARTED),
  CONNECT_REQUEST_COMPLETED: generateOpt(EVENT_NAME.CONNECT_REQUEST_COMPLETED),
  CONNECT_REQUEST_CANCELLED: generateOpt(EVENT_NAME.CONNECT_REQUEST_CANCELLED),
  WALLET_OPENED: generateOpt(EVENT_NAME.WALLET_OPENED),
  TOKEN_ADDED: generateOpt(EVENT_NAME.TOKEN_ADDED),
  COLLECTIBLE_ADDED: generateOpt(EVENT_NAME.COLLECTIBLE_ADDED),
  NETWORK_SWITCHED: generateOpt(EVENT_NAME.NETWORK_SWITCHED),
  NETWORK_ADDED: generateOpt(EVENT_NAME.NETWORK_ADDED),
  NETWORK_REQUESTED: generateOpt(EVENT_NAME.NETWORK_REQUESTED),
  NETWORK_REQUEST_REJECTED: generateOpt(EVENT_NAME.NETWORK_REQUEST_REJECTED),
  SEND_TRANSACTION_STARTED: generateOpt(EVENT_NAME.SEND_TRANSACTION_STARTED),
  SEND_TRANSACTION_COMPLETED: generateOpt(
    EVENT_NAME.SEND_TRANSACTION_COMPLETED,
  ),
  ONRAMP_OPENED: generateOpt(EVENT_NAME.ONRAMP_OPENED),
  ONRAMP_CLOSED: generateOpt(EVENT_NAME.ONRAMP_CLOSED),
  ONRAMP_PURCHASE_EXITED: generateOpt(EVENT_NAME.ONRAMP_PURCHASE_EXITED),
  ONRAMP_PURCHASE_STARTED: generateOpt(EVENT_NAME.ONRAMP_PURCHASE_STARTED),
  ONRAMP_PURCHASE_SUBMISSION_FAILED: generateOpt(
    EVENT_NAME.ONRAMP_PURCHASE_SUBMISSION_FAILED,
  ),
  ONRAMP_PURCHASE_SUBMITTED_LEGACY: generateOpt(
    EVENT_NAME.ONRAMP_PURCHASE_SUBMITTED_LEGACY,
  ),
  ONRAMP_PURCHASE_FAILED_LEGACY: generateOpt(
    EVENT_NAME.ONRAMP_PURCHASE_FAILED_LEGACY,
  ),
  ONRAMP_PURCHASE_CANCELLED_LEGACY: generateOpt(
    EVENT_NAME.ONRAMP_PURCHASE_CANCELLED_LEGACY,
  ),
  ONRAMP_PURCHASE_COMPLETED_LEGACY: generateOpt(
    EVENT_NAME.ONRAMP_PURCHASE_COMPLETED_LEGACY,
  ),
  WALLET_SECURITY_STARTED: generateOpt(EVENT_NAME.WALLET_SECURITY_STARTED),
  WALLET_SECURITY_MANUAL_BACKUP_INITIATED: generateOpt(
    EVENT_NAME.WALLET_SECURITY_MANUAL_BACKUP_INITIATED,
  ),
  WALLET_SECURITY_PHRASE_REVEALED: generateOpt(
    EVENT_NAME.WALLET_SECURITY_PHRASE_REVEALED,
  ),
  WALLET_SECURITY_PHRASE_CONFIRMED: generateOpt(
    EVENT_NAME.WALLET_SECURITY_PHRASE_CONFIRMED,
  ),
  WALLET_SECURITY_SKIP_INITIATED: generateOpt(
    EVENT_NAME.WALLET_SECURITY_SKIP_INITIATED,
  ),
  WALLET_SECURITY_SKIP_CONFIRMED: generateOpt(
    EVENT_NAME.WALLET_SECURITY_SKIP_CONFIRMED,
  ),
  WALLET_SECURITY_RECOVERY_HINT_SAVED: generateOpt(
    EVENT_NAME.WALLET_SECURITY_RECOVERY_HINT_SAVED,
  ),
  WALLET_SECURITY_COMPLETED: generateOpt(EVENT_NAME.WALLET_SECURITY_COMPLETED),
  WALLET_SECURITY_PROTECT_VIEWED: generateOpt(
    EVENT_NAME.WALLET_SECURITY_PROTECT_VIEWED,
  ),
  WALLET_SECURITY_PROTECT_ENGAGED: generateOpt(
    EVENT_NAME.WALLET_SECURITY_PROTECT_ENGAGED,
  ),
  WALLET_SECURITY_PROTECT_DISMISSED: generateOpt(
    EVENT_NAME.WALLET_SECURITY_PROTECT_DISMISSED,
  ),
  ANALYTICS_PREFERENCE_SELECTED: generateOpt(
    EVENT_NAME.ANALYTICS_PREFERENCE_SELECTED,
  ),
  ANALYTICS_REQUEST_DATA_DELETION: generateOpt(
    EVENT_NAME.ANALYTICS_REQUEST_DATA_DELETION,
  ),
  ONBOARDING_WELCOME_MESSAGE_VIEWED: generateOpt(
    EVENT_NAME.ONBOARDING_WELCOME_MESSAGE_VIEWED,
  ),
  ONBOARDING_WELCOME_SCREEN_ENGAGEMENT: generateOpt(
    EVENT_NAME.ONBOARDING_WELCOME_SCREEN_ENGAGEMENT,
  ),
  ONBOARDING_STARTED: generateOpt(EVENT_NAME.ONBOARDING_STARTED),
  ONBOARDING_TOUR_STARTED: generateOpt(EVENT_NAME.ONBOARDING_TOUR_STARTED),
  ONBOARDING_TOUR_SKIPPED: generateOpt(EVENT_NAME.ONBOARDING_TOUR_SKIPPED),
  ONBOARDING_TOUR_STEP_COMPLETED: generateOpt(
    EVENT_NAME.ONBOARDING_TOUR_STEP_COMPLETED,
  ),
  ONBOARDING_TOUR_STEP_REVISITED: generateOpt(
    EVENT_NAME.ONBOARDING_TOUR_STEP_REVISITED,
  ),
  ONBOARDING_TOUR_COMPLETED: generateOpt(EVENT_NAME.ONBOARDING_TOUR_COMPLETED),
  ONBOARDING_COMPLETED: generateOpt(EVENT_NAME.ONBOARDING_COMPLETED),
  WALLET_SETUP_STARTED: generateOpt(EVENT_NAME.WALLET_SETUP_STARTED),
  WALLET_IMPORT_STARTED: generateOpt(EVENT_NAME.WALLET_IMPORT_STARTED),
  WALLET_IMPORT_ATTEMPTED: generateOpt(EVENT_NAME.WALLET_IMPORT_ATTEMPTED),
  WALLET_IMPORTED: generateOpt(EVENT_NAME.WALLET_IMPORTED),
  WALLET_SYNC_STARTED: generateOpt(EVENT_NAME.WALLET_SYNC_STARTED),
  WALLET_SYNC_ATTEMPTED: generateOpt(EVENT_NAME.WALLET_SYNC_ATTEMPTED),
  WALLET_SYNC_SUCCESSFUL: generateOpt(EVENT_NAME.WALLET_SYNC_SUCCESSFUL),
  WALLET_CREATION_ATTEMPTED: generateOpt(EVENT_NAME.WALLET_CREATION_ATTEMPTED),
  WALLET_CREATED: generateOpt(EVENT_NAME.WALLET_CREATED),
  WALLET_SETUP_FAILURE: generateOpt(EVENT_NAME.WALLET_SETUP_FAILURE),
  WALLET_SETUP_COMPLETED: generateOpt(EVENT_NAME.WALLET_SETUP_COMPLETED),
  SWITCHED_ACCOUNT: generateOpt(EVENT_NAME.SWITCHED_ACCOUNT),
  BROWSER_OPENED: generateOpt(EVENT_NAME.BROWSER_OPENED),
  BROWSER_SEARCH_USED: generateOpt(EVENT_NAME.BROWSER_SEARCH_USED),
  BROWSER_NEW_TAB: generateOpt(EVENT_NAME.BROWSER_NEW_TAB),
  BROWSER_SWITCH_NETWORK: generateOpt(EVENT_NAME.BROWSER_SWITCH_NETWORK),
  BROWSER_OPEN_ACCOUNT_SWITCH: generateOpt(
    EVENT_NAME.BROWSER_OPEN_ACCOUNT_SWITCH,
  ),
  BROWSER_NAVIGATION: generateOpt(EVENT_NAME.BROWSER_NAVIGATION),
  BROWSER_SHARE_SITE: generateOpt(EVENT_NAME.BROWSER_SHARE_SITE),
  BROWSER_RELOAD: generateOpt(EVENT_NAME.BROWSER_RELOAD),
  BROWSER_ADD_FAVORITES: generateOpt(EVENT_NAME.BROWSER_ADD_FAVORITES),
  // Security & Privacy Settings
  VIEW_SECURITY_SETTINGS: generateOpt(EVENT_NAME.VIEW_SECURITY_SETTINGS),
  // Reveal SRP
  REVEAL_SRP_CTA: generateOpt(EVENT_NAME.REVEAL_SRP_CTA),
  REVEAL_SRP_SCREEN: generateOpt(EVENT_NAME.REVEAL_SRP_SCREEN),
  GO_BACK_SRP_SCREEN: generateOpt(EVENT_NAME.GO_BACK_SRP_SCREEN),
  CANCEL_REVEAL_SRP_CTA: generateOpt(EVENT_NAME.CANCEL_REVEAL_SRP_CTA),
  NEXT_REVEAL_SRP_CTA: generateOpt(EVENT_NAME.NEXT_REVEAL_SRP_CTA),
  VIEW_SRP: generateOpt(EVENT_NAME.VIEW_SRP),
  SRP_DISMISS_HOLD_TO_REVEAL_DIALOG: generateOpt(
    EVENT_NAME.SRP_DISMISS_HOLD_TO_REVEAL_DIALOG,
  ),
  VIEW_SRP_QR: generateOpt(EVENT_NAME.VIEW_SRP_QR),
  COPY_SRP: generateOpt(EVENT_NAME.COPY_SRP),
  SRP_DONE_CTA: generateOpt(EVENT_NAME.SRP_DONE_CTA),
  REVEAL_SRP_INITIATED: generateOpt(EVENT_NAME.REVEAL_SRP_INITIATED),
  REVEAL_SRP_CANCELLED: generateOpt(EVENT_NAME.REVEAL_SRP_CANCELLED),
  REVEAL_SRP_COMPLETED: generateOpt(EVENT_NAME.REVEAL_SRP_COMPLETED),
  REVEAL_PRIVATE_KEY_INITIATED: generateOpt(
    EVENT_NAME.REVEAL_PRIVATE_KEY_INITIATED,
  ),
  REVEAL_PRIVATE_KEY_CANCELLED: generateOpt(
    EVENT_NAME.REVEAL_PRIVATE_KEY_CANCELLED,
  ),
  REVEAL_PRIVATE_KEY_COMPLETED: generateOpt(
    EVENT_NAME.REVEAL_PRIVATE_KEY_COMPLETED,
  ),
  ANDROID_HARDWARE_KEYSTORE: generateOpt(EVENT_NAME.ANDROID_HARDWARE_KEYSTORE),
  CONNECT_HARDWARE_WALLET: generateOpt(EVENT_NAME.CONNECT_HARDWARE_WALLET),
  CONTINUE_QR_HARDWARE_WALLET: generateOpt(
    EVENT_NAME.CONTINUE_QR_HARDWARE_WALLET,
  ),
  CONNECT_HARDWARE_WALLET_SUCCESS: generateOpt(
    EVENT_NAME.CONNECT_HARDWARE_WALLET_SUCCESS,
  ),
  QR_HARDWARE_TRANSACTION_CANCELED: generateOpt(
    EVENT_NAME.QR_HARDWARE_TRANSACTION_CANCELED,
  ),
  HARDWARE_WALLET_ERROR: generateOpt(EVENT_NAME.HARDWARE_WALLET_ERROR),
  TOKEN_DETECTED: generateOpt(EVENT_NAME.TOKEN_DETECTED),
  TOKEN_IMPORT_CLICKED: generateOpt(EVENT_NAME.TOKEN_IMPORT_CLICKED),
  TOKEN_IMPORT_CANCELED: generateOpt(EVENT_NAME.TOKEN_IMPORT_CANCELED),
  TOKENS_HIDDEN: generateOpt(EVENT_NAME.TOKENS_HIDDEN),
  BUY_BUTTON_CLICKED: generateOpt(EVENT_NAME.BUY_BUTTON_CLICKED),
  ONRAMP_REGION_SELECTED: generateOpt(EVENT_NAME.ONRAMP_REGION_SELECTED),
  ONRAMP_PAYMENT_METHOD_SELECTED: generateOpt(
    EVENT_NAME.ONRAMP_PAYMENT_METHOD_SELECTED,
  ),
  ONRAMP_QUOTES_REQUESTED: generateOpt(EVENT_NAME.ONRAMP_QUOTES_REQUESTED),
  ONRAMP_CANCELED: generateOpt(EVENT_NAME.ONRAMP_CANCELED),
  ONRAMP_QUOTES_RECEIVED: generateOpt(EVENT_NAME.ONRAMP_QUOTES_RECEIVED),
  ONRAMP_PROVIDER_SELECTED: generateOpt(EVENT_NAME.ONRAMP_PROVIDER_SELECTED),
  ONRAMP_PROVIDER_DETAILS_VIEWED: generateOpt(
    EVENT_NAME.ONRAMP_PROVIDER_DETAILS_VIEWED,
  ),
  ONRAMP_DIRECT_PROVIDER_CLICKED: generateOpt(
    EVENT_NAME.ONRAMP_DIRECT_PROVIDER_CLICKED,
  ),
  ONRAMP_PURCHASE_SUBMITTED: generateOpt(EVENT_NAME.ONRAMP_PURCHASE_SUBMITTED),
  ONRAMP_PURCHASE_COMPLETED: generateOpt(EVENT_NAME.ONRAMP_PURCHASE_COMPLETED),
  ONRAMP_PURCHASE_FAILED: generateOpt(EVENT_NAME.ONRAMP_PURCHASE_FAILED),
  ONRAMP_PURCHASE_CANCELLED: generateOpt(EVENT_NAME.ONRAMP_PURCHASE_CANCELLED),
  ONRAMP_PURCHASE_DETAILS_VIEWED: generateOpt(
    EVENT_NAME.ONRAMP_PURCHASE_DETAILS_VIEWED,
  ),
  ONRAMP_EXTERNAL_LINK_CLICKED: generateOpt(
    EVENT_NAME.ONRAMP_EXTERNAL_LINK_CLICKED,
  ),
  ONRAMP_QUOTE_ERROR: generateOpt(EVENT_NAME.ONRAMP_QUOTE_ERROR),
  ONRAMP_ERROR: generateOpt(EVENT_NAME.ONRAMP_ERROR),
  FORCE_UPGRADE_UPDATE_NEEDED_PROMPT_VIEWED: generateOpt(
    EVENT_NAME.FORCE_UPGRADE_UPDATE_NEEDED_PROMPT_VIEWED,
  ),
  FORCE_UPGRADE_UPDATE_TO_THE_LATEST_VERSION_CLICKED: generateOpt(
    EVENT_NAME.FORCE_UPGRADE_UPDATE_TO_THE_LATEST_VERSION_CLICKED,
  ),
  FORCE_UPGRADE_REMIND_ME_LATER_CLICKED: generateOpt(
    EVENT_NAME.FORCE_UPGRADE_REMIND_ME_LATER_CLICKED,
  ),
  AUTOMATIC_SECURITY_CHECKS_PROMPT_VIEWED: generateOpt(
    EVENT_NAME.AUTOMATIC_SECURITY_CHECKS_PROMPT_VIEWED,
  ),
  AUTOMATIC_SECURITY_CHECKS_ENABLED_FROM_PROMPT: generateOpt(
    EVENT_NAME.AUTOMATIC_SECURITY_CHECKS_ENABLED_FROM_PROMPT,
  ),
  AUTOMATIC_SECURITY_CHECKS_DISABLED_FROM_PROMPT: generateOpt(
    EVENT_NAME.AUTOMATIC_SECURITY_CHECKS_DISABLED_FROM_PROMPT,
  ),
  AUTOMATIC_SECURITY_CHECKS_ENABLED_FROM_SETTINGS: generateOpt(
    EVENT_NAME.AUTOMATIC_SECURITY_CHECKS_ENABLED_FROM_SETTINGS,
  ),
  AUTOMATIC_SECURITY_CHECKS_DISABLED_FROM_SETTINGS: generateOpt(
    EVENT_NAME.AUTOMATIC_SECURITY_CHECKS_DISABLED_FROM_SETTINGS,
  ),
  SCREENSHOT_WARNING: generateOpt(EVENT_NAME.SCREENSHOT_WARNING),
  SCREENSHOT_LEARN_MORE: generateOpt(EVENT_NAME.SCREENSHOT_LEARN_MORE),
  SCREENSHOT_OK: generateOpt(EVENT_NAME.SCREENSHOT_OK),
  USER_TERMS: generateOpt(EVENT_NAME.USER_TERMS),
};

/**
 * Legacy Analytics Tracking Events
 */

enum DESCRIPTION {
  //Onboarding
  ONBOARDING_METRICS_OPT_IN = 'Metrics Opt In',
  ONBOARDING_METRICS_OPT_OUT = 'Metrics Opt Out',
  ONBOARDING_SELECTED_CREATE_NEW_WALLET = 'Selected Create New Wallet',
  ONBOARDING_SELECTED_CREATE_NEW_PASSWORD = 'Selected Create New Password',
  ONBOARDING_SELECTED_IMPORT_FROM_SEED = 'Selected Import Wallet',
  ONBOARDING_SELECTED_SYNC_WITH_EXTENSION = 'Selected Sync with Extension',
  ONBOARDING_SELECTED_WITH_SEEDPHRASE = 'Selected Import with Seedphrase',
  ONBOARDING_SELECTED_TAKE_THE_TOUR = `Onboarding wizard 'Take the tour'`,
  ONBOARDING_SELECTED_NO_THANKS = `Onboarding wizard 'No thanks'`,
  ONBOARDING_SELECTED_SKIP = 'Onboarding wizard Skip',
  ONBOARDING_SELECTED_SKIP_TUTORIAL = 'Onboarding wizard Skip',
  // Navigation Drawer
  NAVIGATION_TAPS_ACCOUNT_NAME = 'Tapped Account Name / Profile',
  NAVIGATION_TAPS_SEND = "Taps on 'Send'",
  NAVIGATION_TAPS_RECEIVE = "Taps on 'Receive'",
  NAVIGATION_TAPS_BROWSER = 'Taps Browser',
  NAVIGATION_TAPS_WALLET = 'Taps Wallet',
  NAVIGATION_TAPS_TRANSACTION_HISTORY = 'Transaction History',
  NAVIGATION_TAPS_SHARE_PUBLIC_ADDRESS = 'Share my Public address',
  NAVIGATION_TAPS_VIEW_ETHERSCAN = 'View on Etherscan',
  NAVIGATION_TAPS_GET_HELP = 'Get Help',
  NAVIGATION_TAPS_SEND_FEEDBACK = 'Send Feedback',
  NAVIGATION_TAPS_SETTINGS = 'Settings',
  NAVIGATION_TAPS_LOGOUT = 'Logout',
  // Common Navigation
  COMMON_TAPS_HAMBURGER_MENU = 'Hamburger menu Tapped',
  COMMON_SWIPED_TO_OPEN_NAVIGATION = 'Swiped to open Navigation',
  COMMON_TAPS_ACCOUNT_PROFILE = 'Tapped Account Profiile',
  COMMON_SWITCHED_NETWORKS = 'Switched Networks',
  // Browser
  BROWSER_SEARCH = 'Search',
  BROWSER_FAVORITES = 'My Favorites',
  BROWSER_FEATURED_APPS = 'Featured Apps',
  BROWSER_FEATURED_APPS_OPEN = 'Featured Apps - Open App',
  // Dapp
  DAPP_BROWSER_OPTIONS = 'More Browser Options',
  DAPP_HOME = 'Home',
  DAPP_ADD_TO_FAVORITE = 'Add to Favorites',
  DAPP_OPEN_IN_BROWSER = 'Open in Browser',
  // Wallet
  WALLET_TOKENS = 'Tokens',
  WALLET_COLLECTIBLES = 'Collectibles',
  WALLET_QR_SCANNER = 'QR scanner',
  WALLET_COPIED_ADDRESS = 'Copied Address',
  WALLET_ADD_COLLECTIBLES = 'Add Collectibles',
  // Transactions
  TRANSACTIONS_CONFIRM_STARTED = 'Confirm Started',
  TRANSACTIONS_EDIT_TRANSACTION = 'Edit Transaction',
  TRANSACTIONS_EDIT_GAS = 'Edit Gas',
  TRANSACTIONS_CANCEL_TRANSACTION = 'Cancel',
  TRANSACTIONS_COMPLETED_TRANSACTION = 'Transaction Completed',
  TRANSACTIONS_CONFIRM_SIGNATURE = 'Confirm',
  TRANSACTIONS_CANCEL_SIGNATURE = 'Cancel',
  // Accounts
  ACCOUNTS_SWITCHED_ACCOUNTS = 'Switched Accounts',
  ACCOUNTS_ADDED_NEW_ACCOUNT = 'Added New Account',
  ACCOUNTS_IMPORTED_NEW_ACCOUNT = 'Imported New Account',
  // Authentication
  AUTHENTICATION_INCORRECT_PASSWORD = 'Incorrect Password',
  AUTHENTICATION_CONNECT = 'Popup Opened',
  AUTHENTICATION_CONNECT_CONFIRMED = 'Confirmed',
  AUTHENTICATION_CONNECT_CANCELED = 'Canceled',
  // Settings
  SETTINGS_GENERAL = 'General',
  SETTINGS_ADVANCED = 'Advanced',
  SETTINGS_SECURITY_AND_PRIVACY = 'Security & Privacy',
  SETTINGS_ABOUT = 'About MetaMask',
  SETTINGS_EXPERIMENTAL = 'Experimental',
  // Receive Options
  RECEIVE_OPTIONS_SHARE_ADDRESS = 'Share address',
  RECEIVE_OPTIONS_QR_CODE = 'QR Code',
  RECEIVE_OPTIONS_PAYMENT_REQUEST = 'Payment Request',
  RECEIVE_OPTIONS_BUY = 'Buy',
  // Send Flow
  SEND_FLOW_ADDS_RECIPIENT = `Adds recipient address 'Send to'`,
  SEND_FLOW_ADDS_AMOUNT = `Adds Amount`,
  SEND_FLOW_CONFIRM_SEND = `Confirm Send`,
  SEND_FLOW_ADJUSTS_TRANSACTION_FEE = `Adjusts transaction fee`,
  SEND_FLOW_CANCEL = `Cancel`,
  // Dapp Interactions
  DAPP_APPROVE_SCREEN_APPROVE = 'Approve',
  DAPP_APPROVE_SCREEN_CANCEL = 'Cancel',
  DAPP_APPROVE_SCREEN_EDIT_PERMISSION = 'Edit permission',
  DAPP_APPROVE_SCREEN_EDIT_FEE = 'Edit tx fee',
  DAPP_APPROVE_SCREEN_VIEW_DETAILS = 'View tx details',
  PAYMENTS_SELECTS_DEBIT_OR_ACH = 'Selects debit card or bank account as payment method',
  PAYMENTS_SELECTS_APPLE_PAY = 'Selects Apple Pay as payment method',
  SWAPS = 'Swaps',
}

enum ACTIONS {
  //Onboarding
  METRICS_OPTS = 'Metrics Option',
  IMPORT_OR_CREATE = 'Import or Create',
  IMPORT_OR_SYNC = 'Import or Sync',
  ONBOARDING_NEXT = 'Onboarding Next',
  ONBOARDING_SKIP = 'Onboarding Skip',
  // Navigation Drawer
  NAVIGATION_DRAWER = 'Navigation Drawer',
  // Common Navigation
  COMMON_BROWSER_DAPP_WALLET = 'Browser & Dapp & Wallet View',
  // Browser
  BROWSER_VIEW = 'Browser View',
  // Dapp
  DAPP_VIEW = 'Dapp View',
  // Wallet
  WALLET_VIEW = 'Wallet View',
  //Transactions
  CONFIRM_SCREEN = 'Confirm Screen',
  SIGN_SCREEN = 'Sign Request',
  // Accounts
  ACCOUNTS_MODAL = 'Account Modal',
  // Authentication
  UNLOCK = 'Unlock',
  CONNECT = 'Connect',
  // Settings
  SETTINGS = 'Settings',
  // Receive Options
  RECEIVE_OPTIONS = 'Receive Options',
  // Send Flow
  SEND_FLOW = 'Send Flow',
  // Dapp Interactions
  APPROVE_REQUEST = 'Approve Request',
  BUY_ETH = 'Buy ETH',
  SELECTS_DEBIT_OR_ACH = 'Selects Debit or ACH',
  SELECTS_APPLE_PAY = 'Selects Apple Pay',
  // Swaps
  QUOTE = 'Quote',
  SWAP = 'Swap',
}

const legacyMetaMetricsEvents = {
  //Onboarding
  ONBOARDING_METRICS_OPT_IN: generateOpt(
    EVENT_NAME.ONBOARDING,
    ACTIONS.METRICS_OPTS,
    DESCRIPTION.ONBOARDING_METRICS_OPT_IN,
  ),
  ONBOARDING_METRICS_OPT_OUT: generateOpt(
    EVENT_NAME.ONBOARDING,
    ACTIONS.METRICS_OPTS,
    DESCRIPTION.ONBOARDING_METRICS_OPT_OUT,
  ),
  ONBOARDING_SELECTED_CREATE_NEW_WALLET: generateOpt(
    EVENT_NAME.ONBOARDING,
    ACTIONS.IMPORT_OR_CREATE,
    DESCRIPTION.ONBOARDING_SELECTED_CREATE_NEW_WALLET,
  ),
  ONBOARDING_SELECTED_CREATE_NEW_PASSWORD: generateOpt(
    EVENT_NAME.ONBOARDING,
    ACTIONS.IMPORT_OR_CREATE,
    DESCRIPTION.ONBOARDING_SELECTED_CREATE_NEW_PASSWORD,
  ),
  ONBOARDING_SELECTED_IMPORT_FROM_SEED: generateOpt(
    EVENT_NAME.ONBOARDING,
    ACTIONS.IMPORT_OR_CREATE,
    DESCRIPTION.ONBOARDING_SELECTED_IMPORT_FROM_SEED,
  ),
  ONBOARDING_SELECTED_IMPORT_WITH_SEEDPHRASE: generateOpt(
    EVENT_NAME.ONBOARDING,
    ACTIONS.IMPORT_OR_SYNC,
    DESCRIPTION.ONBOARDING_SELECTED_WITH_SEEDPHRASE,
  ),
  ONBOARDING_SELECTED_SYNC_WITH_EXTENSION: generateOpt(
    EVENT_NAME.ONBOARDING,
    ACTIONS.IMPORT_OR_SYNC,
    DESCRIPTION.ONBOARDING_SELECTED_SYNC_WITH_EXTENSION,
  ),
  ONBOARDING_SELECTED_TAKE_THE_TOUR: generateOpt(
    EVENT_NAME.ONBOARDING,
    ACTIONS.ONBOARDING_NEXT,
    DESCRIPTION.ONBOARDING_SELECTED_TAKE_THE_TOUR,
  ),
  ONBOARDING_SELECTED_NO_THANKS: generateOpt(
    EVENT_NAME.ONBOARDING,
    ACTIONS.ONBOARDING_NEXT,
    DESCRIPTION.ONBOARDING_SELECTED_NO_THANKS,
  ),
  ONBOARDING_SELECTED_SKIP_TUTORIAL: generateOpt(
    EVENT_NAME.ONBOARDING,
    ACTIONS.ONBOARDING_NEXT,
    DESCRIPTION.ONBOARDING_SELECTED_SKIP_TUTORIAL,
  ),
  // Navigation Drawer
  NAVIGATION_TAPS_ACCOUNT_NAME: generateOpt(
    EVENT_NAME.NAVIGATION_DRAWER,
    ACTIONS.NAVIGATION_DRAWER,
    DESCRIPTION.NAVIGATION_TAPS_ACCOUNT_NAME,
  ),
  NAVIGATION_TAPS_SEND: generateOpt(
    EVENT_NAME.NAVIGATION_DRAWER,
    ACTIONS.NAVIGATION_DRAWER,
    DESCRIPTION.NAVIGATION_TAPS_SEND,
  ),
  NAVIGATION_TAPS_RECEIVE: generateOpt(
    EVENT_NAME.NAVIGATION_DRAWER,
    ACTIONS.NAVIGATION_DRAWER,
    DESCRIPTION.NAVIGATION_TAPS_RECEIVE,
  ),
  NAVIGATION_TAPS_BROWSER: generateOpt(
    EVENT_NAME.NAVIGATION_DRAWER,
    ACTIONS.NAVIGATION_DRAWER,
    DESCRIPTION.NAVIGATION_TAPS_BROWSER,
  ),
  NAVIGATION_TAPS_WALLET: generateOpt(
    EVENT_NAME.NAVIGATION_DRAWER,
    ACTIONS.NAVIGATION_DRAWER,
    DESCRIPTION.NAVIGATION_TAPS_WALLET,
  ),
  NAVIGATION_TAPS_TRANSACTION_HISTORY: generateOpt(
    EVENT_NAME.NAVIGATION_DRAWER,
    ACTIONS.NAVIGATION_DRAWER,
    DESCRIPTION.NAVIGATION_TAPS_TRANSACTION_HISTORY,
  ),
  NAVIGATION_TAPS_SHARE_PUBLIC_ADDRESS: generateOpt(
    EVENT_NAME.NAVIGATION_DRAWER,
    ACTIONS.NAVIGATION_DRAWER,
    DESCRIPTION.NAVIGATION_TAPS_SHARE_PUBLIC_ADDRESS,
  ),
  NAVIGATION_TAPS_VIEW_ETHERSCAN: generateOpt(
    EVENT_NAME.NAVIGATION_DRAWER,
    ACTIONS.NAVIGATION_DRAWER,
    DESCRIPTION.NAVIGATION_TAPS_VIEW_ETHERSCAN,
  ),
  NAVIGATION_TAPS_GET_HELP: generateOpt(
    EVENT_NAME.NAVIGATION_DRAWER,
    ACTIONS.NAVIGATION_DRAWER,
    DESCRIPTION.NAVIGATION_TAPS_GET_HELP,
  ),
  NAVIGATION_TAPS_SEND_FEEDBACK: generateOpt(
    EVENT_NAME.NAVIGATION_DRAWER,
    ACTIONS.NAVIGATION_DRAWER,
    DESCRIPTION.NAVIGATION_TAPS_SEND_FEEDBACK,
  ),
  NAVIGATION_TAPS_SETTINGS: generateOpt(
    EVENT_NAME.NAVIGATION_DRAWER,
    ACTIONS.NAVIGATION_DRAWER,
    DESCRIPTION.NAVIGATION_TAPS_SETTINGS,
  ),
  NAVIGATION_TAPS_LOGOUT: generateOpt(
    EVENT_NAME.NAVIGATION_DRAWER,
    ACTIONS.NAVIGATION_DRAWER,
    DESCRIPTION.NAVIGATION_TAPS_LOGOUT,
  ),
  // Common Navigation
  COMMON_TAPS_HAMBURGER_MENU: generateOpt(
    EVENT_NAME.COMMON_NAVIGATION,
    ACTIONS.COMMON_BROWSER_DAPP_WALLET,
    DESCRIPTION.COMMON_TAPS_HAMBURGER_MENU,
  ),
  COMMON_SWIPED_TO_OPEN_NAVIGATION: generateOpt(
    EVENT_NAME.COMMON_NAVIGATION,
    ACTIONS.COMMON_BROWSER_DAPP_WALLET,
    DESCRIPTION.COMMON_SWIPED_TO_OPEN_NAVIGATION,
  ),
  COMMON_TAPS_ACCOUNT_PROFILE: generateOpt(
    EVENT_NAME.COMMON_NAVIGATION,
    ACTIONS.COMMON_BROWSER_DAPP_WALLET,
    DESCRIPTION.COMMON_TAPS_ACCOUNT_PROFILE,
  ),
  COMMON_SWITCHED_NETWORKS: generateOpt(
    EVENT_NAME.COMMON_NAVIGATION,
    ACTIONS.COMMON_BROWSER_DAPP_WALLET,
    DESCRIPTION.COMMON_SWITCHED_NETWORKS,
  ),
  // Browser
  BROWSER_SEARCH: generateOpt(
    EVENT_NAME.BROWSER_VIEW,
    ACTIONS.BROWSER_VIEW,
    DESCRIPTION.BROWSER_SEARCH,
  ),
  BROWSER_FAVORITES: generateOpt(
    EVENT_NAME.BROWSER_VIEW,
    ACTIONS.BROWSER_VIEW,
    DESCRIPTION.BROWSER_FAVORITES,
  ),
  BROWSER_FEATURED_APPS: generateOpt(
    EVENT_NAME.BROWSER_VIEW,
    ACTIONS.BROWSER_VIEW,
    DESCRIPTION.BROWSER_FEATURED_APPS,
  ),
  BROWSER_FEATURED_APPS_OPEN: generateOpt(
    EVENT_NAME.BROWSER_VIEW,
    ACTIONS.BROWSER_VIEW,
    DESCRIPTION.BROWSER_FEATURED_APPS_OPEN,
  ),
  // Dapp
  DAPP_BROWSER_OPTIONS: generateOpt(
    EVENT_NAME.DAPP_VIEW,
    ACTIONS.DAPP_VIEW,
    DESCRIPTION.DAPP_BROWSER_OPTIONS,
  ),
  DAPP_HOME: generateOpt(
    EVENT_NAME.DAPP_VIEW,
    ACTIONS.DAPP_VIEW,
    DESCRIPTION.DAPP_HOME,
  ),
  DAPP_ADD_TO_FAVORITE: generateOpt(
    EVENT_NAME.DAPP_VIEW,
    ACTIONS.DAPP_VIEW,
    DESCRIPTION.DAPP_ADD_TO_FAVORITE,
  ),
  DAPP_OPEN_IN_BROWSER: generateOpt(
    EVENT_NAME.DAPP_VIEW,
    ACTIONS.DAPP_VIEW,
    DESCRIPTION.DAPP_OPEN_IN_BROWSER,
  ),
  // Wallet
  WALLET_TOKENS: generateOpt(
    EVENT_NAME.WALLET_VIEW,
    ACTIONS.WALLET_VIEW,
    DESCRIPTION.WALLET_TOKENS,
  ),
  WALLET_COLLECTIBLES: generateOpt(
    EVENT_NAME.WALLET_VIEW,
    ACTIONS.WALLET_VIEW,
    DESCRIPTION.WALLET_COLLECTIBLES,
  ),
  WALLET_QR_SCANNER: generateOpt(
    EVENT_NAME.WALLET_VIEW,
    ACTIONS.WALLET_VIEW,
    DESCRIPTION.WALLET_QR_SCANNER,
  ),
  WALLET_COPIED_ADDRESS: generateOpt(
    EVENT_NAME.WALLET_VIEW,
    ACTIONS.WALLET_VIEW,
    DESCRIPTION.WALLET_COPIED_ADDRESS,
  ),
  WALLET_ADD_COLLECTIBLES: generateOpt(
    EVENT_NAME.WALLET_VIEW,
    ACTIONS.WALLET_VIEW,
    DESCRIPTION.WALLET_ADD_COLLECTIBLES,
  ),
  // Transactions
  TRANSACTIONS_CONFIRM_STARTED: generateOpt(
    EVENT_NAME.TRANSACTIONS,
    ACTIONS.CONFIRM_SCREEN,
    DESCRIPTION.TRANSACTIONS_CONFIRM_STARTED,
  ),
  TRANSACTIONS_EDIT_TRANSACTION: generateOpt(
    EVENT_NAME.TRANSACTIONS,
    ACTIONS.CONFIRM_SCREEN,
    DESCRIPTION.TRANSACTIONS_EDIT_TRANSACTION,
  ),
  TRANSACTIONS_EDIT_GAS: generateOpt(
    EVENT_NAME.TRANSACTIONS,
    ACTIONS.CONFIRM_SCREEN,
    DESCRIPTION.TRANSACTIONS_EDIT_GAS,
  ),
  TRANSACTIONS_CANCEL_TRANSACTION: generateOpt(
    EVENT_NAME.TRANSACTIONS,
    ACTIONS.CONFIRM_SCREEN,
    DESCRIPTION.TRANSACTIONS_CANCEL_TRANSACTION,
  ),
  TRANSACTIONS_COMPLETED_TRANSACTION: generateOpt(
    EVENT_NAME.TRANSACTIONS,
    ACTIONS.CONFIRM_SCREEN,
    DESCRIPTION.TRANSACTIONS_COMPLETED_TRANSACTION,
  ),
  TRANSACTIONS_CONFIRM_SIGNATURE: generateOpt(
    EVENT_NAME.TRANSACTIONS,
    ACTIONS.SIGN_SCREEN,
    DESCRIPTION.TRANSACTIONS_CONFIRM_SIGNATURE,
  ),
  TRANSACTIONS_CANCEL_SIGNATURE: generateOpt(
    EVENT_NAME.TRANSACTIONS,
    ACTIONS.SIGN_SCREEN,
    DESCRIPTION.TRANSACTIONS_CANCEL_SIGNATURE,
  ),
  // Accounts
  ACCOUNTS_SWITCHED_ACCOUNTS: generateOpt(
    EVENT_NAME.ACCOUNTS,
    ACTIONS.ACCOUNTS_MODAL,
    DESCRIPTION.ACCOUNTS_SWITCHED_ACCOUNTS,
  ),
  ACCOUNTS_ADDED_NEW_ACCOUNT: generateOpt(
    EVENT_NAME.ACCOUNTS,
    ACTIONS.ACCOUNTS_MODAL,
    DESCRIPTION.ACCOUNTS_ADDED_NEW_ACCOUNT,
  ),
  ACCOUNTS_IMPORTED_NEW_ACCOUNT: generateOpt(
    EVENT_NAME.ACCOUNTS,
    ACTIONS.ACCOUNTS_MODAL,
    DESCRIPTION.ACCOUNTS_IMPORTED_NEW_ACCOUNT,
  ),
  // Authentication
  AUTHENTICATION_INCORRECT_PASSWORD: generateOpt(
    EVENT_NAME.AUTH,
    ACTIONS.UNLOCK,
    DESCRIPTION.AUTHENTICATION_INCORRECT_PASSWORD,
  ),
  AUTHENTICATION_CONNECT: generateOpt(
    EVENT_NAME.AUTH,
    ACTIONS.CONNECT,
    DESCRIPTION.AUTHENTICATION_CONNECT,
  ),
  AUTHENTICATION_CONNECT_CONFIRMED: generateOpt(
    EVENT_NAME.AUTH,
    ACTIONS.CONNECT,
    DESCRIPTION.AUTHENTICATION_CONNECT_CONFIRMED,
  ),
  AUTHENTICATION_CONNECT_CANCELED: generateOpt(
    EVENT_NAME.AUTH,
    ACTIONS.CONNECT,
    DESCRIPTION.AUTHENTICATION_CONNECT_CANCELED,
  ),
  // Settings
  SETTINGS_GENERAL: generateOpt(
    EVENT_NAME.SETTINGS,
    ACTIONS.SETTINGS,
    DESCRIPTION.SETTINGS_GENERAL,
  ),
  SETTINGS_ADVANCED: generateOpt(
    EVENT_NAME.SETTINGS,
    ACTIONS.SETTINGS,
    DESCRIPTION.SETTINGS_ADVANCED,
  ),
  SETTINGS_SECURITY_AND_PRIVACY: generateOpt(
    EVENT_NAME.SETTINGS,
    ACTIONS.SETTINGS,
    DESCRIPTION.SETTINGS_SECURITY_AND_PRIVACY,
  ),
  SETTINGS_ABOUT: generateOpt(
    EVENT_NAME.SETTINGS,
    ACTIONS.SETTINGS,
    DESCRIPTION.SETTINGS_ABOUT,
  ),
  SETTINGS_EXPERIMENTAL: generateOpt(
    EVENT_NAME.SETTINGS,
    ACTIONS.SETTINGS,
    DESCRIPTION.SETTINGS_EXPERIMENTAL,
  ),
  // Receive Options
  RECEIVE_OPTIONS_SHARE_ADDRESS: generateOpt(
    EVENT_NAME.RECEIVE_OPTIONS,
    ACTIONS.RECEIVE_OPTIONS,
    DESCRIPTION.RECEIVE_OPTIONS_SHARE_ADDRESS,
  ),
  RECEIVE_OPTIONS_QR_CODE: generateOpt(
    EVENT_NAME.RECEIVE_OPTIONS,
    ACTIONS.RECEIVE_OPTIONS,
    DESCRIPTION.RECEIVE_OPTIONS_QR_CODE,
  ),
  RECEIVE_OPTIONS_PAYMENT_REQUEST: generateOpt(
    EVENT_NAME.RECEIVE_OPTIONS,
    ACTIONS.RECEIVE_OPTIONS,
    DESCRIPTION.RECEIVE_OPTIONS_PAYMENT_REQUEST,
  ),
  RECEIVE_OPTIONS_BUY: generateOpt(
    EVENT_NAME.RECEIVE_OPTIONS,
    ACTIONS.RECEIVE_OPTIONS,
    DESCRIPTION.RECEIVE_OPTIONS_BUY,
  ),
  // Send flow
  SEND_FLOW_ADDS_RECIPIENT: generateOpt(
    EVENT_NAME.SEND_FLOW,
    ACTIONS.SEND_FLOW,
    DESCRIPTION.SEND_FLOW_ADDS_RECIPIENT,
  ),
  SEND_FLOW_ADDS_AMOUNT: generateOpt(
    EVENT_NAME.SEND_FLOW,
    ACTIONS.SEND_FLOW,
    DESCRIPTION.SEND_FLOW_ADDS_AMOUNT,
  ),
  SEND_FLOW_CONFIRM_SEND: generateOpt(
    EVENT_NAME.SEND_FLOW,
    ACTIONS.SEND_FLOW,
    DESCRIPTION.SEND_FLOW_CONFIRM_SEND,
  ),
  SEND_FLOW_ADJUSTS_TRANSACTION_FEE: generateOpt(
    EVENT_NAME.SEND_FLOW,
    ACTIONS.SEND_FLOW,
    DESCRIPTION.SEND_FLOW_ADJUSTS_TRANSACTION_FEE,
  ),
  SEND_FLOW_CANCEL: generateOpt(
    EVENT_NAME.SEND_FLOW,
    ACTIONS.SEND_FLOW,
    DESCRIPTION.SEND_FLOW_CANCEL,
  ),
  // Dapp Interactions
  DAPP_APPROVE_SCREEN_APPROVE: generateOpt(
    EVENT_NAME.DAPP_INTERACTIONS,
    ACTIONS.APPROVE_REQUEST,
    DESCRIPTION.DAPP_APPROVE_SCREEN_APPROVE,
  ),
  DAPP_APPROVE_SCREEN_CANCEL: generateOpt(
    EVENT_NAME.DAPP_INTERACTIONS,
    ACTIONS.APPROVE_REQUEST,
    DESCRIPTION.DAPP_APPROVE_SCREEN_CANCEL,
  ),
  DAPP_APPROVE_SCREEN_EDIT_PERMISSION: generateOpt(
    EVENT_NAME.DAPP_INTERACTIONS,
    ACTIONS.APPROVE_REQUEST,
    DESCRIPTION.DAPP_APPROVE_SCREEN_EDIT_PERMISSION,
  ),
  DAPP_APPROVE_SCREEN_EDIT_FEE: generateOpt(
    EVENT_NAME.DAPP_INTERACTIONS,
    ACTIONS.APPROVE_REQUEST,
    DESCRIPTION.DAPP_APPROVE_SCREEN_EDIT_FEE,
  ),
  DAPP_APPROVE_SCREEN_VIEW_DETAILS: generateOpt(
    EVENT_NAME.DAPP_INTERACTIONS,
    ACTIONS.APPROVE_REQUEST,
    DESCRIPTION.DAPP_APPROVE_SCREEN_VIEW_DETAILS,
  ),
  PAYMENTS_SELECTS_DEBIT_OR_ACH: generateOpt(
    EVENT_NAME.PAYMENTS,
    ACTIONS.SELECTS_DEBIT_OR_ACH,
    DESCRIPTION.PAYMENTS_SELECTS_DEBIT_OR_ACH,
  ),
  PAYMENTS_SELECTS_APPLE_PAY: generateOpt(
    EVENT_NAME.PAYMENTS,
    ACTIONS.SELECTS_APPLE_PAY,
    DESCRIPTION.PAYMENTS_SELECTS_APPLE_PAY,
  ),
  // Swaps
  SWAPS_OPENED: generateOpt(
    EVENT_NAME.SWAPS_OPENED,
    ACTIONS.SWAP,
    DESCRIPTION.SWAPS,
  ),
  QUOTES_REQUESTED: generateOpt(
    EVENT_NAME.QUOTES_REQUESTED,
    ACTIONS.QUOTE,
    DESCRIPTION.SWAPS,
  ),
  QUOTES_RECEIVED: generateOpt(
    EVENT_NAME.QUOTES_RECEIVED,
    ACTIONS.QUOTE,
    DESCRIPTION.SWAPS,
  ),
  QUOTES_REQUEST_CANCELLED: generateOpt(
    EVENT_NAME.QUOTES_REQUEST_CANCELLED,
    ACTIONS.QUOTE,
    DESCRIPTION.SWAPS,
  ),
  ALL_AVAILABLE_QUOTES_OPENED: generateOpt(
    EVENT_NAME.ALL_AVAILABLE_QUOTES_OPENED,
    ACTIONS.QUOTE,
    DESCRIPTION.SWAPS,
  ),
  SWAP_STARTED: generateOpt(
    EVENT_NAME.SWAP_STARTED,
    ACTIONS.SWAP,
    DESCRIPTION.SWAPS,
  ),
  SWAP_COMPLETED: generateOpt(
    EVENT_NAME.SWAP_COMPLETED,
    ACTIONS.SWAP,
    DESCRIPTION.SWAPS,
  ),
  SWAP_FAILED: generateOpt(
    EVENT_NAME.SWAP_FAILED,
    ACTIONS.SWAP,
    DESCRIPTION.SWAPS,
  ),
  SWAP_TRACKING_FAILED: generateOpt(
    EVENT_NAME.SWAP_TRACKING_FAILED,
    ACTIONS.SWAP,
    DESCRIPTION.SWAPS,
  ),
  QUOTES_TIMED_OUT: generateOpt(
    EVENT_NAME.QUOTES_TIMED_OUT,
    ACTIONS.QUOTE,
    DESCRIPTION.SWAPS,
  ),
  NO_QUOTES_AVAILABLE: generateOpt(
    EVENT_NAME.NO_QUOTES_AVAILABLE,
    ACTIONS.QUOTE,
    DESCRIPTION.SWAPS,
  ),
  GAS_FEES_CHANGED: generateOpt(
    EVENT_NAME.GAS_FEES_CHANGED,
    ACTIONS.QUOTE,
    DESCRIPTION.SWAPS,
  ),
  EDIT_SPEND_LIMIT_OPENED: generateOpt(
    EVENT_NAME.EDIT_SPEND_LIMIT_OPENED,
    ACTIONS.QUOTE,
    DESCRIPTION.SWAPS,
  ),
  CUSTOM_TOKEN_IMPORTED: generateOpt(
    EVENT_NAME.TOKEN_IMPORTED,
    ACTIONS.SWAP,
    DESCRIPTION.SWAPS,
  ),
};

const MetaMetricsEvents = { ...events, ...legacyMetaMetricsEvents };

export { MetaMetricsEvents, ONBOARDING_WIZARD_STEP_DESCRIPTION, EVENT_NAME };
