'use client';

import { Card, CardBody } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Tabs, Tab } from '@/components/ui/Tabs';
import { ListRow } from '@/components/ui/ListRow';
import { StateTemplate } from '@/components/ui/StateTemplate';

const UserProfileCard = () => (
    <Card>
        <CardBody style={{display: 'flex', alignItems: 'center', gap: 16}}>
            <Avatar src="https://example.com/khwarizmi.png" alt="Al-Khwarizmi" size="lg" />
            <div>
                <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                    <h1 style={{fontSize: 24, fontWeight: 700}}>Al-Khwarizmi</h1>
                    <Badge variant="verified">Verified</Badge>
                </div>
                <p style={{color: 'var(--slate)'}}>Pioneer of Algebra</p>
            </div>
            <Button variant='secondary' style={{marginLeft: 'auto'}}>Edit Profile</Button>
        </CardBody>
    </Card>
);

const Contributions = () => (
     <ListRow 
        title="A new method for solving quadratic equations" 
        subtitle="Published in 'Kitab al-Jabr'"
        meta="820 AD"
    />
)

const Bookmarks = () => (
    <StateTemplate 
        icon={<span>🔖</span>}
        title="No Bookmarks Yet"
        message="You can bookmark interesting articles and find them here later."
    />
)

export default function ProfilePage() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
            <UserProfileCard />
            <Tabs>
                <Tab title="Contributions">
                    <Contributions />
                </Tab>
                <Tab title="Bookmarks">
                    <Bookmarks />
                </Tab>
            </Tabs>
        </div>
    )
}
