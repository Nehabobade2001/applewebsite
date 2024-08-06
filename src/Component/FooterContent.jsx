import React, { Fragment } from 'react'


const FooterContent = () => {
  return (
    <Fragment>
    <div className=" flex flex-col items-center justify-center my-4">
      <div className="w-3/5 text-sm ">
        <p className="text-sm">
          1. Trade-in values will vary based on the condition, year, and
          configuration of your eligible trade-in device. Not all devices are
          eligible for credit. You must be at least 18 years old to be
          eligible to trade in for credit or for an Apple Gift Card. Trade-in
          value may be applied toward qualifying new device purchase, or added
          to an Apple Gift Card. Actual value awarded is based on receipt of a
          qualifying device matching the description provided when estimate
          was made. Sales tax may be assessed on full value of a new device
          purchase. In-store trade-in requires presentation of a valid photo
          ID (local law may require saving this information). Offer may not be
          available in all stores, and may vary between in-store and online
          trade-in. Some stores may have additional requirements. Apple or its
          trade-in partners reserve the right to refuse or limit quantity of
          any trade-in transaction for any reason. More details are available
          from Apple’s trade-in partner for trade-in and recycling of eligible
          devices. Restrictions and limitations may apply.
        </p>

        <p className="my-4 text-sm font-serif">
          Available in the U.S. on apple.com, in the Apple Store app, and at
          Apple Stores.
        </p>
        <p className="my-4 text-sm font-serif">
          A subscription is required for Apple TV+.
        </p>
        <p className="my-4 text-italic ">
          To access and use all Apple Card features and products available
          only to Apple Card users, you must add Apple Card to Wallet on an
          iPhone or iPad that supports and has the latest version of iOS or
          iPadOS. Apple Card is subject to credit approval, available only for
          qualifying applicants in the United States, and issued by Goldman
          Sachs Bank USA, Salt Lake City Branch.
        </p>
        <p className="my-4 text-italic">
          If you reside in the U.S. territories, please call Goldman Sachs at
          877-255-5923 with questions about Apple Card.
        </p>
        <p className="my-4 text-italic font-serif underline decoration-wavy">
          Learn more about how Apple Card applications are evaluated at
          support.apple.com/kb/HT209218.
        </p>
        <div className="h-0.5 w-full bg-black"></div>
      </div>
      
    </div>
  </Fragment>


  )
}

export default FooterContent