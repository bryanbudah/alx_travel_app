import aiosqlite
import asyncio

# ✅ Fetch all users and return them
async def async_fetch_users():
    async with aiosqlite.connect("users.db") as db:
        cursor = await db.execute("SELECT * FROM users")
        users = await cursor.fetchall()
        await cursor.close()
        return users

# ✅ Fetch users older than 40 and return them
async def async_fetch_older_users():
    async with aiosqlite.connect("users.db") as db:
        cursor = await db
