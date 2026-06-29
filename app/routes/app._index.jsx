import { useFetcher, useLoaderData } from "react-router";
import { authenticate, saveToShopMetafield } from "../shopify.server";
import { connectDB } from "../lib/mongodb";
import Announcement from "../models/Announcement";

export const loader = async ({ request }) => {
  await authenticate.admin(request);

  await connectDB();

  const announcements = await Announcement.find().sort({
    createdAt: -1,
  });

  return {
    announcements: JSON.parse(JSON.stringify(announcements)),
  };
};

export const action = async ({ request }) => {
  const { admin } = await authenticate.admin(request);

  await connectDB();

  const formData = await request.formData();
  const title = formData.get("title");

  if (!title) {
    return { success: false };
  }

  const announcement = await Announcement.create({ title });

  const metafieldResult = await saveToShopMetafield(admin, title);

  console.log(metafieldResult);

  return {
    success: true,
    announcement,
  };
};


export default function AnnouncementManager() {
  const { announcements } = useLoaderData();

  const fetcher = useFetcher();

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "700px",
        margin: "0 auto",
      }}
    >
      <h1>Announcement Dashboard</h1>

      <fetcher.Form method="post">
        <input
          type="text"
          name="title"
          placeholder="Enter announcement..."
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            marginBottom: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px 24px",
            cursor: "pointer",
          }}
        >
          Save Announcement
        </button>
      </fetcher.Form>
          
    </div>
  );
}